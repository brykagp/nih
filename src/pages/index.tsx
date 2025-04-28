// import SignIn from "./auth/signin";

// export default function Home() {
//   return <SignIn />;
// }



import SignUp from "./auth/signup";

export default function Home() {
  return <SignUp />;
}







// import { useEffect, useState, useCallback } from "react";

// interface Patient {
//   id: string;
//   name?: { given?: string[]; family?: string }[];
//   gender?: string;
//   birthDate?: string;
// }

// interface Condition {
//   id: string;
//   code?: { text?: string } | undefined;
//   onsetDateTime?: string;
// }

// interface DiagnosticReport {
//   id: string;
//   code?: { text?: string } | undefined;
//   effectiveDateTime?: string;
// }

// interface ResourceResponse {
//   entry?: { resource: Patient | Condition | DiagnosticReport }[];
// }

// const HealthLakeTable = () => {
//   const [data, setData] = useState<Patient[] | Condition[] | DiagnosticReport[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [resourceType, setResourceType] = useState<"Patient" | "Condition" | "DiagnosticReport">("Patient");

//   // ✅ Fix: Use `useCallback` to prevent function recreation in `useEffect`
//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`/api/healthlake?resource=${resourceType}`);
//       console.log(`API Response Status (${resourceType}):`, response.status);

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const jsonData = (await response.json()) as ResourceResponse;
//       console.log(`API Response Data (${resourceType}):`, jsonData);

//       if (jsonData.entry) {
//         setData(jsonData.entry.map((entry) => entry.resource));
//       } else {
//         console.warn(`No 'entry' field found in ${resourceType} API response.`);
//         setData([]);
//       }
//     } catch (err) {
//       console.error("Fetch Error:", err);
//       setError((err as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   }, [resourceType]); // ✅ Fix: Include `resourceType` as a dependency

//   // ✅ Fix: `useEffect` calls `fetchData` properly without breaking rules
//   useEffect(() => {
//     void fetchData(); // ✅ Fix: Use `void` operator to ignore floating promise ESLint warning
//   }, [fetchData]);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">AWS HealthLake Data</h1>

//       {/* Dropdown for selecting resource type */}
//       <select
//         className="mb-4 p-2 border border-gray-300 rounded"
//         value={resourceType}
//         onChange={(e) => setResourceType(e.target.value as "Patient" | "Condition" | "DiagnosticReport")}
//       >
//         <option value="Patient">Patients</option>
//         <option value="Condition">Conditions</option>
//         <option value="DiagnosticReport">Diagnostic Reports</option>
//       </select>

//       {/* Error Message */}
//       {error && <p className="text-red-500">Error: {error}</p>}

//       {/* Data Table */}
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">ID</th>
//             {resourceType === "Patient" && <th className="border px-4 py-2">Name</th>}
//             {resourceType === "Patient" && <th className="border px-4 py-2">Gender</th>}
//             {resourceType === "Patient" && <th className="border px-4 py-2">Birth Date</th>}

//             {resourceType === "Condition" && <th className="border px-4 py-2">Condition</th>}
//             {resourceType === "Condition" && <th className="border px-4 py-2">Onset Date</th>}

//             {resourceType === "DiagnosticReport" && <th className="border px-4 py-2">Report Type</th>}
//             {resourceType === "DiagnosticReport" && <th className="border px-4 py-2">Effective Date</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan={4} className="text-center p-4">Loading...</td>
//             </tr>
//           ) : data.length > 0 ? (
//             data.map((item) => (
//               <tr key={item.id} className="border">
//                 <td className="border px-4 py-2">{item.id}</td>
                
//                 {/* Patient Fields */}
//                 {"name" in item && (
//                   <td className="border px-4 py-2">
//                     {item.name?.[0]?.given?.join(" ") ?? "Unknown"} {item.name?.[0]?.family ?? ""}
//                   </td>
//                 )}
//                 {"gender" in item && <td className="border px-4 py-2">{item.gender ?? "N/A"}</td>}
//                 {"birthDate" in item && <td className="border px-4 py-2">{item.birthDate ?? "N/A"}</td>}

//                 {/* Condition Fields */}
//                 {"code" in item && (
//                   <td className="border px-4 py-2">{item.code?.text ?? "N/A"}</td>
//                 )}
//                 {"onsetDateTime" in item && <td className="border px-4 py-2">{item.onsetDateTime ?? "N/A"}</td>}

//                 {/* DiagnosticReport Fields */}
//                 {"code" in item && (
//                   <td className="border px-4 py-2">{item.code?.text ?? "N/A"}</td>
//                 )}
//                 {"effectiveDateTime" in item && <td className="border px-4 py-2">{item.effectiveDateTime ?? "N/A"}</td>}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="text-center p-4">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HealthLakeTable;
