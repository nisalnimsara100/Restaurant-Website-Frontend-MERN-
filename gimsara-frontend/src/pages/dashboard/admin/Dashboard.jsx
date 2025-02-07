import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { FaBook, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch admin stats
  const { data: stats = {} } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });

  // Graph Data
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStats");
      return res.data;
    },
  });

  const StatCard = ({ icon: Icon, title, value, trend, bgColor }) => (
    <div className={`${bgColor} rounded-lg p-4 text-white`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <p className="text-sm mt-2 opacity-70">{trend}</p>
        </div>
        <div className="text-2xl opacity-80">
          <Icon />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {user?.displayName}
        </h1>
        <p className="text-gray-600 mt-1">
          Here is what is happening with your restaurant today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={FaDollarSign}
          title="Revenue"
          value={`Rs.${stats.revenue || 0}`}
          trend="This Month"
          bgColor="bg-blue-500"
        />
        <StatCard
          icon={FaUsers}
          title="Total Users"
          value={stats.users || 0}
          trend="This Year"
          bgColor="bg-purple-500"
        />
        <StatCard
          icon={FaBook}
          title="Menu Items"
          value={stats.menuItems || 0}
          trend="All Categories"
          bgColor="bg-green"
        />
        <StatCard
          icon={FaShoppingCart}
          title="Orders"
          value={stats.orders || 0}
          trend="This Year"
          bgColor="bg-orange-500"
        />
      </div>

      {/* Revenue Chart */}
      <div className="mt-20">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
