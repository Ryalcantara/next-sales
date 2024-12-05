"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Package, Users, DollarSign, Search } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import Topbar from "@/components/report/Topbar/Topbar";

// Chart component with error boundary
const ChartComponent = () => {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    // Import ApexCharts only on client side
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const chartOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    colors: ["#2563eb"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: true,
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
        formatter: (value) => `$${value.toFixed(2)}`,
      },
    },
    grid: {
      show: true,
      borderColor: "#e2e8f0",
      strokeDashArray: 4,
      padding: {
        left: 0,
        right: 0,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
  };

  const chartData = [
    {
      name: "Sales",
      data: Array.from({ length: 30 }, (_, i) => ({
        x: new Date(2024, 4, i + 1).getTime(),
        y: Math.floor(10000 + Math.random() * 5000),
      })),
    },
  ];

  if (!Chart) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        Loading chart...
      </div>
    );
  }

  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="area"
      height="100%"
    />
  );
};

// Rest of the components remain the same...
const StatsCard = ({ title, value, unit, change, percentage, trend, icon }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        {icon}
        <span className="text-sm">{title}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-sm text-muted-foreground">{unit}</div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span
          className={`text-sm ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </span>
        <span
          className={`text-sm ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}
        >
          {trend === "up" ? "↑" : "↓"} {percentage}
        </span>
      </div>
    </CardContent>
  </Card>
);

const ProductRow = ({ image, name, orders, type }) => (
  <div className="grid grid-cols-3 items-center">
    <div className="flex items-center gap-2">
      <img src={image} alt={name} className="w-10 h-10 rounded-md" />
    </div>
    <div>
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{type}</div>
    </div>
    <div className="text-sm">{orders} Times</div>
  </div>
);

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="p-6 space-y-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Date Periods:</span>
            <Select defaultValue="monthly">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Show Graph</span>
            <Switch />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4">
          <StatsCard
            title="Total Sales Amount"
            value="12,650.00"
            unit="PH"
            change="+PH 1,543.30"
            percentage="12.2%"
            trend="up"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <StatsCard
            title="Total Product Sales"
            value="1,250"
            unit="Items"
            change="+125 Items"
            percentage="10%"
            trend="up"
            icon={<Package className="h-4 w-4" />}
          />
          <StatsCard
            title="Total Customers"
            value="400"
            unit="Persons"
            change="-5 Persons"
            percentage="0.02%"
            trend="down"
            icon={<Users className="h-4 w-4" />}
          />
          <StatsCard
            title="Net Profit"
            value="12,650.00"
            unit="PH"
            change="+PH 3,792"
            percentage="0.3%"
            trend="up"
            icon={<TrendingUp className="h-4 w-4" />}
          />
        </div>

        {/* Graph and Products Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Graph Card */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">
                  Report Graph
                </CardTitle>
                <Select defaultValue="total-sales">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select metric" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="total-sales">
                      Total Sales Amount
                    </SelectItem>
                    <SelectItem value="products">Product Sales</SelectItem>
                    <SelectItem value="customers">Customers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartComponent />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-semibold">12,650.00 PH</div>
                  <div className="text-sm text-muted-foreground">Amount</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-green-600">
                    +1,543.30 PH
                  </div>
                  <div className="text-sm text-muted-foreground">Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-green-600">
                    ↑ 12.2
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Growth Percentage
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Favorite Products Card */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">
                  Favorite Product
                </CardTitle>
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground">
                  <div>Img</div>
                  <div>Product Name</div>
                  <div>Total Orders</div>
                </div>
                <ProductRow
                  image="/api/placeholder/50/50"
                  name="Buttermelt Croissant"
                  orders="183"
                  type="Pastry"
                />
                <ProductRow
                  image="/api/placeholder/50/50"
                  name="Beef Crowich"
                  orders="160"
                  type="Sandwich"
                />
                <ProductRow
                  image="/api/placeholder/50/50"
                  name="Sliced Black Forest"
                  orders="125"
                  type="Cake"
                />
                <ProductRow
                  image="/api/placeholder/50/50"
                  name="Solo Floss Bread"
                  orders="119"
                  type="Bread"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
