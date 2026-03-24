import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Footer from '@/components/sections/Footer';
import { useToast } from '@/hooks/use-toast';
import { golamartApi } from '@/services/golamartApi';
import type { Order, OrderStatus, Product } from '@/types/golamart';
import { BarChart3, Boxes, ClipboardList, Loader2 } from 'lucide-react';

export default function AdminGolaMart() {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusLoadingId, setStatusLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [productResult, orderResult] = await Promise.all([
        golamartApi.listProducts(),
        golamartApi.listOrders(),
      ]);

      setProducts(productResult);
      setOrders(orderResult);
    } catch (loadError) {
      const message = loadError instanceof Error ? loadError.message : 'Unable to load dashboard';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadDashboard();
  }, []);

  const handleStatusUpdate = async (orderId: string, status: OrderStatus) => {
    setStatusLoadingId(orderId);

    try {
      const updatedOrder = await golamartApi.updateOrderStatus(orderId, status);
      setOrders((current) =>
        current.map((order) => (order._id === orderId ? updatedOrder : order))
      );
      toast({
        title: 'Order updated',
        description: `Order status changed to ${status}.`,
      });
    } catch (updateError) {
      const message =
        updateError instanceof Error ? updateError.message : 'Unable to update order status';
      toast({
        title: 'Status update failed',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setStatusLoadingId(null);
    }
  };

  const orderVolume = orders.reduce((sum, order) => sum + order.totalAmount, 0);

  return (
    <div className="min-h-screen bg-background pt-28">
      <section className="relative overflow-hidden pb-14 pt-8">
        <div className="surface-grid absolute inset-0 opacity-35" />
        <div className="container relative px-4">
          <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
                <ClipboardList className="h-4 w-4" />
                Admin / GolaMart
              </div>
              <h1 className="font-heading mt-6 text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl xl:text-6xl">
                Manage products,
                <span className="gradient-text mt-3 block">orders, and crop flow.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                A lightweight admin dashboard for monitoring the agritech marketplace inside
                your existing platform.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 bg-background/80">
              <a href="/my-product">Open Marketplace</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card className="border-border/80 bg-foreground text-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Boxes className="h-5 w-5 text-secondary" />
                  <p className="text-sm uppercase tracking-[0.2em] text-background/65">Products</p>
                </div>
                <p className="font-heading mt-4 text-3xl font-semibold">{products.length}</p>
              </CardContent>
            </Card>
            <Card className="border-border/80 bg-background/90">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Orders</p>
                </div>
                <p className="font-heading mt-4 text-3xl font-semibold">{orders.length}</p>
              </CardContent>
            </Card>
            <Card className="border-border/80 bg-background/90">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Volume</p>
                </div>
                <p className="font-heading mt-4 text-3xl font-semibold">₹{orderVolume.toFixed(0)}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container space-y-6 px-4">
          {error ? (
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-6">
                <p className="font-medium text-destructive">Dashboard connection issue</p>
                <p className="mt-2 text-sm text-muted-foreground">{error}</p>
              </CardContent>
            </Card>
          ) : null}

          <div className="grid gap-6 xl:grid-cols-2">
            <Card className="border-border/80 bg-background/90">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                      Inventory
                    </p>
                    <h2 className="font-heading mt-2 text-2xl font-semibold">All products</h2>
                  </div>
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin text-primary" /> : null}
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Crop</TableHead>
                      <TableHead>Farmer</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product._id}>
                        <TableCell className="font-medium">
                          <div>{product.cropName}</div>
                          <div className="text-xs font-normal text-muted-foreground">
                            {[product.state, product.market, product.season].filter(Boolean).join(' • ') || 'Marketplace listing'}
                          </div>
                        </TableCell>
                        <TableCell>{product.farmer?.name ?? 'Partner'}</TableCell>
                        <TableCell>₹{product.price}</TableCell>
                        <TableCell>{product.quantity} qtl</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-background/90">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                      Orders
                    </p>
                    <h2 className="font-heading mt-2 text-2xl font-semibold">Order status control</h2>
                  </div>
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin text-primary" /> : null}
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Buyer</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell className="font-medium">{order.buyer?.name ?? 'Buyer'}</TableCell>
                        <TableCell>
                          {order.products.map((item) => `${item.cropName} (${item.quantity})`).join(', ')}
                        </TableCell>
                        <TableCell>₹{order.totalAmount.toFixed(0)}</TableCell>
                        <TableCell>
                          <Select
                            value={order.status}
                            onValueChange={(value: OrderStatus) =>
                              void handleStatusUpdate(order._id, value)
                            }
                            disabled={statusLoadingId === order._id}
                          >
                            <SelectTrigger className="h-10 min-w-[150px] rounded-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
