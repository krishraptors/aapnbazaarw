export type UserRole = 'farmer' | 'buyer' | 'admin';
export type OrderStatus = 'pending' | 'completed';
export type CropSeason = 'Kharif' | 'Rabi' | 'Zaid' | 'Perennial';

export interface UserSummary {
  _id: string;
  name: string;
  phone: string;
  role: UserRole;
}

export interface Product {
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
  farmer?: UserSummary;
}

export interface OrderLineItem {
  productId: string;
  cropName: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  buyer?: UserSummary;
  products: OrderLineItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}

export interface CreateProductPayload {
  farmerName: string;
  farmerPhone: string;
  cropName: string;
  price: number;
  quantity: number;
  cropType?: string;
  season?: CropSeason;
  state?: string;
  market?: string;
  grade?: string;
}

export interface CreateOrderPayload {
  buyerName: string;
  buyerPhone: string;
  products: OrderLineItem[];
}
