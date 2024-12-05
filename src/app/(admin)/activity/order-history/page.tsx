import React from "react";
import { Calendar, Clock, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Activity from "../page";

const OrderManagement = () => {
  return (
    <Activity>
      <div className="w-full border p-4 overflow-auto" style={{ height: "calc(100dvh- 60px)" }}>
        {/* Date & Time Filter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-sm text-gray-500">Date:</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-md px-3 py-1">
                <span className="text-sm">May 25, 2024</span>
                <Calendar className="h-4 w-4 ml-2 text-gray-500" />
              </div>
              <span>—</span>
              <div className="flex items-center border rounded-md px-3 py-1">
                <span className="text-sm">May 29, 2024</span>
                <Calendar className="h-4 w-4 ml-2 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Time:</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-md px-3 py-1">
                <span className="text-sm">08:00 AM</span>
                <Clock className="h-4 w-4 ml-2 text-gray-500" />
              </div>
              <span>—</span>
              <div className="flex items-center border rounded-md px-3 py-1">
                <span className="text-sm">01:00 PM</span>
                <Clock className="h-4 w-4 ml-2 text-gray-500" />
              </div>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </div>

        {/* Orders Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">#</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Total Payment</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.dateTime}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.orderStatus}</TableCell>
                <TableCell>PH {order.totalPayment}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.paymentStatus === "Paid"
                        ? "secondary"
                        : "destructive"
                    }
                    className={
                      order.paymentStatus === "Paid"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }
                  >
                    {order.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="link" className="text-blue-500">
                    Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Activity>
  );
};

// Sample order data
const orders = [
  {
    id: "001",
    dateTime: "25/05/2024 - 08:00 AM",
    customerName: "George",
    orderStatus: "Done",
    totalPayment: "35.00",
    paymentStatus: "Paid",
  },
  {
    id: "002",
    dateTime: "25/05/2024 - 08:17 AM",
    customerName: "Charlie",
    orderStatus: "Done",
    totalPayment: "12.50",
    paymentStatus: "Paid",
  },
  {
    id: "003",
    dateTime: "25/05/2024 - 08:30 AM",
    customerName: "Hyacinth",
    orderStatus: "Done",
    totalPayment: "15.25",
    paymentStatus: "Paid",
  },
  {
    id: "004",
    dateTime: "25/05/2024 - 08:35 AM",
    customerName: "Francesca",
    orderStatus: "Done",
    totalPayment: "22.10",
    paymentStatus: "Paid",
  },
  {
    id: "005",
    dateTime: "25/05/2024 - 08:42 AM",
    customerName: "Eliza",
    orderStatus: "Cancelled",
    totalPayment: "12.25",
    paymentStatus: "Unpaid",
  },
];

export default OrderManagement;
