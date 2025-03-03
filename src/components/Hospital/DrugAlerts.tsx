


import React, { useState, useEffect } from "react";

interface DrugInteraction {
  drug1: string;
  drug2: string;
  severity: "Mild" | "Moderate" | "Severe";
  description: string;
}

const severityColors: Record<string, string> = {
  Severe: "text-red-500",
  Moderate: "text-yellow-500",
  Mild: "text-green-500"
};

const severityIcons: Record<string, string> = {
  Severe: "🔴",
  Moderate: "🟠",
  Mild: "🟢"
};

const DrugInteractionAlerts: React.FC = () => {
  const [interactions, setInteractions] = useState<DrugInteraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/drug_interactions.json")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data) && data.every((item) => "drug1" in item && "drug2" in item && "severity" in item && "description" in item)) {
          setInteractions(data as DrugInteraction[]);
        } else {
          console.error("Invalid drug interaction data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching drug interactions:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-lg text-white max-w-6xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4">Drug Interaction Alerts</h2>

      {loading ? (
        <p>Loading interactions...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Drug 1</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Drug 2</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Severity</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Effect</th>
              </tr>
            </thead>
            <tbody>
              {interactions.map((interaction, index) => (
                <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                  <td className="border border-gray-700 px-4 py-2">{interaction.drug1}</td>
                  <td className="border border-gray-700 px-4 py-2">{interaction.drug2}</td>
                  <td className={`border border-gray-700 px-4 py-2 font-semibold ${severityColors[interaction.severity]}`}>
                    {severityIcons[interaction.severity]} {interaction.severity}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">{interaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DrugInteractionAlerts;

