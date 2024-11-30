"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, MoreHorizontal, ChevronRight } from "lucide-react";
import Activity from "../page";

const OrderTracking = () => {
  return (
    <Activity>
      <div className="flex-1 space-y-6 overflow-auto border h-dvh" style={{ height: "calc(100dvh- 60px)" }}>
        {/* Top Navigation */}
        <div className="flex items-center justify-between" >
          <Tabs defaultValue="all" className="w-[300px]">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger
                value="all"
                className="bg-blue-50 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-blue-50 text-blue-600">
              4 Active Queue
            </Badge>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Order List */}
        <div className="space-y-4"  >
          <OrderItem
            name="Francois"
            orderNumber="#006"
            table="06"
            time="Wed, 29 May 2024 - 09:15 AM"
            amount="$20.00"
            status="active"
          />
          <OrderItem
            name="Elouse"
            orderNumber="#005"
            table="05"
            time="Wed, 29 May 2024 - 09:00 AM"
            amount="$19.35"
            status="closed"
          />
          <OrderItem
            name="Mike"
            orderNumber="#004"
            table="04"
            time="Wed, 29 May 2024 - 08:15 AM"
            amount="$25.00"
            status="active"
          />
          <OrderItem
            name="Billie"
            orderNumber="#003"
            table="03"
            time="Wed, 29 May 2024 - 08:00 AM"
            amount="$31.50"
            status="active"
          />
        </div>

        {/* Track Order Section */}
        <div className="relative">
          <Input placeholder="Track Order" className="pr-24" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
            <div className="w-px h-4 bg-gray-200" />
            <Button
              size="icon"
              className="h-8 w-8 bg-blue-500 hover:bg-blue-600"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Kitchen Orders Grid */}
        <div className="grid grid-cols-4 gap-4">
          <KitchenOrderCard
            name="Mike"
            status="On Kitchen Hand"
            table="04"
            dineType="Dine In"
            time="10:00 AM"
            items={[
              "1x Beef Crowich",
              "1x Grains Pan Bread",
              "1x Cheesy Sourdough",
              "1x Sliced Black Forest",
            ]}
            totalItems={4}
          />
          <KitchenOrderCard
            name="Billie"
            status="All Done"
            table="04"
            dineType="Dine In"
            time="10:00 AM"
            items={[
              "1x Beef Crowich",
              "1x Cereal Cream Donut",
              "1x Cheesy Sourdough",
            ]}
            totalItems={6}
          />
          <KitchenOrderCard
            name="Richard"
            status="On Kitchen Hand"
            table="04"
            dineType="Dine In"
            time="10:00 AM"
            items={[
              "1x Beef Crowich",
              "1x Cereal Cream Donut",
              "1x Cheesy Sourdough",
            ]}
            totalItems={6}
          />
          <KitchenOrderCard
            name="Sharon"
            status="On Kitchen Hand"
            table="04"
            dineType="Dine In"
            time="10:00 AM"
            items={[
              "1x Beef Crowich",
              "1x Cereal Cream Donut",
              "1x Cheesy Sourdough",
            ]}
            totalItems={6}
          />
        </div>
      </div>
    </Activity>
  );
};

const OrderItem = ({ name, orderNumber, table, time, amount, status }) => (
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

const KitchenOrderCard = ({
  name,
  status,
  table,
  dineType,
  time,
  items,
  totalItems,
}) => (
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

export default OrderTracking;
