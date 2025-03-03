
import React, { useEffect, useState } from "react";

// Define the structure for the test results
interface TestResult {
  parameter: string;
  result: string;
  normalRange: string;
}

const TestResults: React.FC = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch test results from the JSON file
  useEffect(() => {
    // Declare the async function inside useEffect and call it
    const fetchTestResults = async () => {
      try {
        const response: Response = await fetch("/testResults.json");

        // Ensure response is ok (status 200-299)
        if (!response.ok) {
          throw new Error("Failed to fetch test results");
        }

        // Properly type the result of response.json() as TestResult[]
        const data = await response.json() as TestResult[];  // Type assertion here

        // Set the fetched test results into the state
        setTestResults(data);
        setLoading(false);  // Stop loading
      } catch (error) {
        console.error("Error fetching test results:", error);
        setLoading(false);  // Stop loading even if there's an error
      }
    };

    // Call the async function and ensure it's properly handled
    fetchTestResults().catch((error) => {
      console.error("Promise rejection handled:", error);
    });
  }, []);

  if (loading) {
    return <p>Loading test results...</p>;
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Test Results</h2>

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
            {testResults.map((test, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
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
