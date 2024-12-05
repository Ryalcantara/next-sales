import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type OrderItems = {
  name: string;
  orderNumber: string;
  table: string;
  time: string;
  amount: string;
  status: string;
};
type TKitchenOrderCard = {
    name: string; 
    status: string; 
    table: string; 
    dineType: string; 
    time: string;
    items: string[]; 
    totalItems: number; 
};


export const OrderItem = ({
  name,
  orderNumber,
  table,
  time,
  amount,
  status,
}: OrderItems) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
    <div className="space-y-1">
      <h3 className="font-medium">{name}</h3>
      <div className="text-sm text-gray-500">
        <div>Order Number: {orderNumber}</div>
        <div>Table: {table}</div>
        <div>{time}</div>
      </div>
    </div>
    <div className="text-right space-y-2">
      <div className="text-lg font-semibold">{amount}</div>
      <Badge
        variant="secondary"
        className={
          status === "active"
            ? "bg-blue-50 text-blue-600"
            : "bg-red-50 text-red-600"
        }
      >
        {status === "active" ? "Active" : "Closed"}
      </Badge>
    </div>
  </div>
);

export const KitchenOrderCard = ({
  name,
  status,
  table,
  dineType,
  time,
  items,
  totalItems,
}: TKitchenOrderCard) => (
  <Card>
    <CardContent className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{name}</h3>
        <Badge
          variant="secondary"
          className={
            status === "All Done"
              ? "bg-green-50 text-green-600"
              : "bg-gray-100 text-gray-600"
          }
        >
          {status}
        </Badge>
      </div>

      <div className="text-sm text-gray-500">
        Table {table} - {dineType}
        <br />
        {time}
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="text-sm">
            {item}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="text-gray-500">Total Order: {totalItems} items</div>
        <Button variant="link" className="text-blue-500 p-0 h-auto">
          See More
        </Button>
      </div>
    </CardContent>
  </Card>
);
