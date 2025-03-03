
import React, { useState, useEffect } from "react";

interface LabResult {
  testName: string;
  testDate: string;
  result: string;
  referenceRange: string;
  notes: string;
}

const statusColors: Record<string, string> = {
  Normal: "text-green-500",
  Abnormal: "text-red-500"
};

const LabResults: React.FC = () => {
  const [records, setRecords] = useState<LabResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    fetch("/lab_results.json") // Assuming you have a JSON with lab results
      .then((res) => res.json())
      .then((data: unknown) => {
        if (
          Array.isArray(data) &&
          data.every(
            (item) =>
              "testName" in item &&
              "testDate" in item &&
              "result" in item &&
              "referenceRange" in item &&
              "notes" in item
          )
        ) {
          setRecords(data as LabResult[]);
        } else {
          console.error("Invalid lab results data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching lab results:", error);
        setLoading(false);
      });
  }, []);

  const filteredRecords = filter
    ? records.filter(
        (record) =>
          record.testName.toLowerCase().includes(filter.toLowerCase()) ||
          record.result.toLowerCase().includes(filter.toLowerCase())
      )
    : records;

  return (
    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-lg text-white max-w-6xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4">Past Lab Results</h2>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="Filter by Test Name or Result..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-500 rounded-md w-full bg-gray-800 text-white"
      />

      {loading ? (
        <p>Loading lab results...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Test Name</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Test Date</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Result</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Reference Range</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => {
                  const resultStatus =
                    record.result === "Normal" ? "Normal" : "Abnormal"; // Assuming your result field could have "Normal" or something else
                  return (
                    <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                      <td className="border border-gray-700 px-4 py-2">{record.testName}</td>
                      <td className="border border-gray-700 px-4 py-2">{record.testDate}</td>
                      <td className={`border border-gray-700 px-4 py-2 font-semibold ${statusColors[resultStatus]}`}>
                        {record.result}
                      </td>
                      <td className="border border-gray-700 px-4 py-2">{record.referenceRange}</td>
                      <td className="border border-gray-700 px-4 py-2">{record.notes}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="text-center border border-gray-700 py-4 text-gray-500">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LabResults;
