import { SidebarTrigger } from "@/components/ui/sidebar";
import { format } from "date-fns";
import { Clock, Power, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartItem, categories, Product, products } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";
export default function POSBody() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prev.filter((item) => item.id !== productId);
    });
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;
  const discount = 5.0;

  const total = subtotal + tax - discount;

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {format(new Date(), "EEE, dd MMM yyyy")}
              <span className="text-xs">—</span>
              {format(new Date(), "HH:mm")}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-blue-500">
              Open Register
            </Button>
            <Button variant="ghost" size="icon">
              <Power className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-auto p-4 pb-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`shrink-0 cursor-pointer transition-colors hover:bg-accent ${
                selectedCategory === category.id ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardContent className="flex w-32 flex-col items-center gap-2 p-4">
                <span className="text-2xl">{category.icon}</span>
                <div className="text-center">
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {category.items}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <div className="relative px-4">
          <Search className="absolute left-8 top-3 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full rounded-md border border-input bg-background px-12 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Search for products..."
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer transition-all hover:scale-105"
              onClick={() => addToCart(product)}
            >
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="mb-4 aspect-square rounded-lg object-cover"
                  width={400}
                height={400}

                />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-blue-500">
                      {product.categoryLabel}
                    </p>
                  </div>
                  <p className="font-medium">₱{product.price.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Panel */}
      <div className="w-[400px] border-l">
        <div className="flex h-full flex-col">
          {/* Order Header */}
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold">Current Order</h2>
            <p className="text-sm text-muted-foreground">Order Number: #1234</p>
            <div className="mt-4 flex gap-4">
              <Select defaultValue="cashier">
                <SelectTrigger>
                  <SelectValue placeholder="Cashier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cashier">Cashier</SelectItem>
                  <SelectItem value="self-checkout">Self-Checkout</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="in-store">
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-store">In-Store</SelectItem>
                  <SelectItem value="pickup">Pickup</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Order Items */}
          <div className="flex-1 overflow-auto p-4">
            {cart.map((item) => (
              <div key={item.id} className="mb-4 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                  width={400}
                height={400}
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ₱{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t p-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span>₱{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-green-500">
                <span>Discount</span>
                <span>-₱{discount.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₱{total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="mt-4 w-full" size="lg">
              Complete Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
