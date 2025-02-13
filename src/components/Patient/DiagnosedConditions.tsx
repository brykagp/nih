import { useState } from "react";

export default function DiagnosedConditions() {
  const [diagnosedConditions, ] = useState([
    {
      id: 1,
      name: "Rheumatoid Arthritis",
      date: "2023-09-15",
      severity: "Moderate",
      medication: "Methotrexate",
      notes: "Regular exercise and physiotherapy recommended.",
    },
    {
      id: 2,
      name: "Lupus",
      date: "2024-01-05",
      severity: "Severe",
      medication: "Hydroxychloroquine",
      notes: "Avoid excessive sunlight exposure.",
    },
  ]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Diagnosed Conditions</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Condition</th>
              <th className="border border-gray-300 p-2 text-left">Diagnosis Date</th>
              <th className="border border-gray-300 p-2 text-left">Severity</th>
              <th className="border border-gray-300 p-2 text-left">Medication</th>
              <th className="border border-gray-300 p-2 text-left">Doctor&apos;s Notes</th>
            </tr>
          </thead>
          <tbody>
            {diagnosedConditions.map((condition) => (
              <tr key={condition.id} className="hover:bg-gray-100 border-b border-gray-300">
                <td className="border border-gray-300 p-2">{condition.name}</td>
                <td className="border border-gray-300 p-2">{condition.date}</td>
                <td className="border border-gray-300 p-2">{condition.severity}</td>
                <td className="border border-gray-300 p-2">{condition.medication}</td>
                <td className="border border-gray-300 p-2">{condition.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
