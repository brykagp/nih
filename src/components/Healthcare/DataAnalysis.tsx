import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define the type for the chart data
interface ChartData {
  date: string;
  cases: number;
  hospitalizations: number;
}

// Sample data for the chart
const data: ChartData[] = [
  { date: "Jan", cases: 400, hospitalizations: 240 },
  { date: "Feb", cases: 700, hospitalizations: 320 },
  { date: "Mar", cases: 1500, hospitalizations: 800 },
  { date: "Apr", cases: 1800, hospitalizations: 900 },
];

const DataAnalysis: React.FC = () => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Data Analysis</h2>
      <p>Analyze and visualize healthcare data.</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" />
          <Line type="monotone" dataKey="hospitalizations" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataAnalysis;
