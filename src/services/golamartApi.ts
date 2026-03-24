import axios from 'axios';
import type {
  CropSeason,
  CreateOrderPayload,
  CreateProductPayload,
  Order,
  OrderStatus,
  Product,
  UserSummary,
} from '@/types/golamart';

const detectedHost =
  typeof window !== 'undefined' ? window.location.hostname || '127.0.0.1' : '127.0.0.1';

const apiCandidates = Array.from(
  new Set(
    [
      import.meta.env.VITE_GOLAMART_API_URL,
      `http://${detectedHost}:5000/api`,
      `http://${detectedHost}:5050/api`,
    ].filter(Boolean)
  )
);

const golamartClient = axios.create({
  timeout: 10000,
});

let activeBaseUrl = apiCandidates[0] ?? `http://${detectedHost}:5000/api`;

type RawProduct = {
  _id: string;
  cropName: string;
  price: number;
  quantity: number;
  createdAt: string;
  cropType?: string;
  season?: CropSeason;
  state?: string;
  market?: string;
  grade?: string;
  farmerId?: string | UserSummary;
};

type RawOrder = {
  _id: string;
  buyerId?: string | UserSummary;
  products: Array<{
    productId?: string;
    cropName: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
};

const toMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? error.message ?? 'Request failed';
  }

  return error instanceof Error ? error.message : 'Unexpected error';
};

const shouldRetryNextBaseUrl = (error: unknown) =>
  axios.isAxiosError(error) &&
  (!error.response ||
    error.code === 'ERR_NETWORK' ||
    error.code === 'ECONNREFUSED' ||
    error.code === 'ETIMEDOUT');

const request = async <T>(config: Parameters<typeof golamartClient.request<T>>[0]) => {
  const candidates = [activeBaseUrl, ...apiCandidates.filter((url) => url !== activeBaseUrl)];
  let lastError: unknown;

  for (const baseURL of candidates) {
    try {
      const response = await golamartClient.request<T>({
        ...config,
        baseURL,
      });
      activeBaseUrl = baseURL;
      return response;
    } catch (error) {
      lastError = error;

      if (!shouldRetryNextBaseUrl(error) || baseURL === candidates[candidates.length - 1]) {
        throw error;
      }
    }
  }

  throw lastError;
};

const normalizeUser = (value?: string | UserSummary) =>
  value && typeof value === 'object' ? value : undefined;

const normalizeProduct = (product: RawProduct): Product => ({
  _id: product._id,
  cropName: product.cropName,
  price: product.price,
  quantity: product.quantity,
  createdAt: product.createdAt,
  cropType: product.cropType,
  season: product.season,
  state: product.state,
  market: product.market,
  grade: product.grade,
  farmer: normalizeUser(product.farmerId),
});

const normalizeOrder = (order: RawOrder): Order => ({
  _id: order._id,
  buyer: normalizeUser(order.buyerId),
  products: order.products.map((item) => ({
    productId: item.productId ?? '',
    cropName: item.cropName,
    quantity: item.quantity,
    price: item.price,
  })),
  totalAmount: order.totalAmount,
  status: order.status,
  createdAt: order.createdAt,
});

export const golamartApi = {
  async listProducts() {
    try {
      const { data } = await request<{ products: RawProduct[] }>({
        method: 'GET',
        url: '/products',
      });
      return data.products.map(normalizeProduct);
    } catch (error) {
      throw new Error(toMessage(error));
    }
  },

  async createProduct(payload: CreateProductPayload) {
    try {
      const { data } = await request<{ product: RawProduct }>({
        method: 'POST',
        url: '/products',
        data: payload,
      });
      return normalizeProduct(data.product);
    } catch (error) {
      throw new Error(toMessage(error));
    }
  },

  async createOrder(payload: CreateOrderPayload) {
    try {
      const { data } = await request<{ order: RawOrder }>({
        method: 'POST',
        url: '/orders',
        data: payload,
      });
      return normalizeOrder(data.order);
    } catch (error) {
      throw new Error(toMessage(error));
    }
  },

  async listOrders() {
    try {
      const { data } = await request<{ orders: RawOrder[] }>({
        method: 'GET',
        url: '/orders',
      });
      return data.orders.map(normalizeOrder);
    } catch (error) {
      throw new Error(toMessage(error));
    }
  },

  async updateOrderStatus(orderId: string, status: OrderStatus) {
    try {
      const { data } = await request<{ order: RawOrder }>({
        method: 'PATCH',
        url: `/orders/${orderId}/status`,
        data: { status },
      });
      return normalizeOrder(data.order);
    } catch (error) {
      throw new Error(toMessage(error));
    }
  },
};
