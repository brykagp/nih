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







// import { useState } from "react";
// import {
//   FiLogOut,
//   FiClipboard,
//   FiUser,
//   FiFileText,
//   FiBell,
//   FiMessageSquare,
//   FiBarChart2,
// } from "react-icons/fi";

// import { useRouter } from "next/router";
// import Chatbot from "../../components/Chatbot/Main";
// import EpidemiologicalData from "./EpidemiologicalData";
// import PublicHealthAlerts from "./PublicHealthAlerts";
// import Announcements from "./AnnouncementsCdc";
// import OperationalMetrics from "./OperationalMetrics";

// export default function CDCMain() {
//   const [activeTab, setActiveTab] = useState<
//     "epidemiology" | "publicHealthAlerts" | "announcements" | "chat" | "metrics"
//   >("epidemiology");

//   const router = useRouter();

//   const handleLogout = async () => {
//     await router.push("/");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-80 bg-gray-900 p-5 text-white">
//         <h2 className="mb-4 text-xl font-bold">CDC Healthcare Portal</h2>

//         <div className="space-y-4">
//           <button
//             onClick={() => setActiveTab("epidemiology")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "epidemiology" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiClipboard /> View Epidemiological Data
//           </button>

//           <button
//             onClick={() => setActiveTab("announcements")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "announcements" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiFileText /> Announcements (CDC)
//           </button>

//           <button
//             onClick={() => setActiveTab("chat")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "chat" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiMessageSquare /> Chat & Partnering Institutions
//           </button>

//           <button
//             onClick={() => setActiveTab("metrics")}
//             className={`flex w-full items-center gap-2 p-3 text-left ${activeTab === "metrics" ? "bg-gray-700" : "hover:bg-gray-800"}`}
//           >
//             <FiBarChart2 /> View Operational Metrics
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-5">
//         <nav className="flex justify-between bg-gray-100 p-4">
//           <h1 className="text-lg font-semibold">Welcome, CDC Representative</h1>
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white"
//           >
//             <FiLogOut /> Log out
//           </button>
//         </nav>

//         {/* Dynamic Content */}
//         <div className="mt-6 border p-4">
//           {activeTab === "epidemiology" && <EpidemiologicalData />}
//           {activeTab === "publicHealthAlerts" && <PublicHealthAlerts />}
//           {activeTab === "announcements" && <Announcements />}

//           {activeTab === "chat" && <Chatbot />}

//           {activeTab === "metrics" && <OperationalMetrics />}
//         </div>
//       </div>
//     </div>
//   );
// }
