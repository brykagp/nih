import React, { useState, useEffect } from "react";

interface BillingRecord {
  patientName: string;
  insuranceProvider: string;
  policyNumber: string;
  billAmount: number;
  status: "Paid" | "Pending" | "Overdue";
  dateOfBilling: string;
}

const statusColors: Record<string, string> = {
  Paid: "text-green-500",
  Pending: "text-yellow-500",
  Overdue: "text-red-500"
};

const InsuranceBilling: React.FC = () => {
  const [records, setRecords] = useState<BillingRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    fetch("/insurance_billing.json")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data) && data.every((item) =>
          "patientName" in item && "insuranceProvider" in item && 
          "policyNumber" in item && "billAmount" in item &&
          "status" in item && "dateOfBilling" in item)) {
          setRecords(data as BillingRecord[]);
        } else {
          console.error("Invalid insurance billing data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching billing records:", error);
        setLoading(false);
      });
  }, []);

  const filteredRecords = filter
    ? records.filter((record) =>
        record.insuranceProvider.toLowerCase().includes(filter.toLowerCase()) ||
        record.status.toLowerCase().includes(filter.toLowerCase())
      )
    : records;

  return (
    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-lg text-white max-w-6xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4">Past Insurance & Billing Data</h2>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="Filter by Insurance Provider or Status..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-500 rounded-md w-full bg-gray-800 text-white"
      />

      {loading ? (
        <p>Loading billing records...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Patient</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Insurance Provider</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Policy Number</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Bill Amount ($)</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Billing Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => (
                  <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                    <td className="border border-gray-700 px-4 py-2">{record.patientName}</td>
                    <td className="border border-gray-700 px-4 py-2">{record.insuranceProvider}</td>
                    <td className="border border-gray-700 px-4 py-2">{record.policyNumber}</td>
                    <td className="border border-gray-700 px-4 py-2">${record.billAmount.toFixed(2)}</td>
                    <td className={`border border-gray-700 px-4 py-2 font-semibold ${statusColors[record.status]}`}>
                      {record.status}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">{new Date(record.dateOfBilling).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center border border-gray-700 py-4 text-gray-500">
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

export default InsuranceBilling;
