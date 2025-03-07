import React, { useEffect, useState } from "react";

// Define the structure for the test results
interface TestResult {
  parameter: string;
  result: string;
  normalRange: string;
}

// Define a new interface to hold additional test information
interface TestDetails {
  viewTestResults: string;
  sampleType: string;
  testDate: string;
  testLocation: string;
  results: TestResult[]; // Embed the test results
}

const TestResults: React.FC = () => {
  const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch test details from the JSON file
  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response: Response = await fetch("/testDetails.json");

        if (!response.ok) {
          throw new Error("Failed to fetch test details");
        }

        // Properly type the result of response.json() as TestDetails
        const data = await response.json() as TestDetails;

        setTestDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching test details:", error);
        setLoading(false);
      }
    };

    fetchTestDetails().catch((error) => {
      console.error("Promise rejection handled:", error);
    });
  }, []);

  if (loading) {
    return <p>Loading test results...</p>;
  }

  if (!testDetails) {
    return <p>Error: Could not load test details.</p>;
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Test Results</h2>

      {/* Display additional test information */}
      <div className="mb-4">
        <p>
          <b>View Test Results:</b> {testDetails.viewTestResults}
        </p>
        <p>
          <b>Sample Type:</b> {testDetails.sampleType}
        </p>
        <p>
          <b>Test Date:</b> {testDetails.testDate}
        </p>
        <p>
          <b>Test Location:</b> {testDetails.testLocation}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Parameter</th>
              <th className="border border-gray-300 p-2 text-left">Result</th>
              <th className="border border-gray-300 p-2 text-left">Normal Range</th>
            </tr>
          </thead>
          <tbody>
            {testDetails.results.map((test, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="border border-gray-300 p-2">{test.parameter}</td>
                <td className="border border-gray-300 p-2">{test.result}</td>
                <td className="border border-gray-300 p-2">{test.normalRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestResults;
