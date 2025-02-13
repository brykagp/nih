import React, { useState, useEffect } from "react";

interface Metrics {
  hospitalBedAvailability: number;
  testingCapacity: number;
  emergencyResponseTime: number;
}

const OperationalMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/metrics.json")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (typeof data === "object" && data !== null && "hospitalBedAvailability" in data) {
          setMetrics(data as Metrics); // ✅ Type-Safe Assignment
        } else {
          console.error("Invalid metrics data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching metrics:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Operational Metrics</h2>

      {loading ? (
        <p>Loading metrics...</p>
      ) : metrics ? (
        <div className="space-y-4">
          {/* Hospital Bed Availability */}
          <div>
            <h3 className="text-lg font-semibold">Hospital Bed Availability</h3>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className="bg-green-500 h-6 rounded-full text-center text-white"
                style={{ width: `${metrics.hospitalBedAvailability}%` }}
              >
                {metrics.hospitalBedAvailability}%
              </div>
            </div>
          </div>

          {/* Testing Capacity */}
          <div>
            <h3 className="text-lg font-semibold">Testing Capacity</h3>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className="bg-blue-500 h-6 rounded-full text-center text-white"
                style={{ width: `${metrics.testingCapacity}%` }}
              >
                {metrics.testingCapacity}%
              </div>
            </div>
          </div>

          {/* Emergency Response Time */}
          <div>
            <h3 className="text-lg font-semibold">Emergency Response Time</h3>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className="bg-red-500 h-6 rounded-full text-center text-white"
                style={{ width: `${metrics.emergencyResponseTime}%` }}
              >
                {metrics.emergencyResponseTime} mins
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No operational data available.</p>
      )}
    </div>
  );
};

export default OperationalMetrics;
