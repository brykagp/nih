





// import type { NextApiRequest, NextApiResponse } from "next";
// import aws4 from "aws4";
// import dotenv from "dotenv";

// dotenv.config();

// const AWS_REGION = process.env.AWS_REGION!;
// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID!;
// const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY!;
// const HEALTHLAKE_HOST = "healthlake.us-east-1.amazonaws.com";
// const HEALTHLAKE_PATH = "/datastore/3128ef1470d37566fa0ab664b91e15d5/r4/Patient";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Define request options properly
//     const options = {
//       host: HEALTHLAKE_HOST,
//       path: HEALTHLAKE_PATH,
//       service: "healthlake",
//       region: AWS_REGION,
//       method: "GET",
//       headers: {} as Record<string, string>, // Fix: Ensure headers exist
//     };

//     // Sign the request
//     const signedRequest = aws4.sign(options, {
//       accessKeyId: AWS_ACCESS_KEY_ID,
//       secretAccessKey: AWS_SECRET_ACCESS_KEY,
//     });

//     if (!signedRequest.headers) {
//       throw new Error("Signing request failed: Headers missing");
//     }

//     // Fetch AWS HealthLake data
//     const response = await fetch(`https://${HEALTHLAKE_HOST}${HEALTHLAKE_PATH}`, {
//       method: options.method,
//       headers: signedRequest.headers as HeadersInit,
//     });

//     console.log("API Response Status Patient:", response.status);

//     if (!response.ok) {
//       return res.status(response.status).json({ error: `AWS Error: ${response.status}` });
//     }

//     // Ensure response is properly typed
//     const data: unknown = await response.json();

//     return res.status(200).json(data);
//   } catch (error) {
//     console.error("Server Error:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }












// import type { NextApiRequest, NextApiResponse } from "next";
// import aws4 from "aws4";
// import dotenv from "dotenv";

// dotenv.config();

// const AWS_REGION = process.env.AWS_REGION!;
// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID!;
// const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY!;
// const HEALTHLAKE_HOST = "healthlake.us-east-1.amazonaws.com";
// const BASE_PATH = "/datastore/3128ef1470d37566fa0ab664b91e15d5/r4";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { resource } = req.query; // Get the resource type from query params

//     // Validate resource type
//     const allowedResources = ["Patient", "Condition", "DiagnosticReport"];
//     if (!resource || !allowedResources.includes(resource as string)) {
//       return res.status(400).json({ error: "Invalid or missing resource type. Use 'Patient', 'Condition', or 'DiagnosticReport'." });
//     }

//     // Construct the path dynamically
//     const resourcePath = `${BASE_PATH}/${resource}`;

//     // Define request options properly
//     const options = {
//       host: HEALTHLAKE_HOST,
//       path: resourcePath,
//       service: "healthlake",
//       region: AWS_REGION,
//       method: "GET",
//       headers: {} as Record<string, string>,
//     };

//     // Sign the request
//     const signedRequest = aws4.sign(options, {
//       accessKeyId: AWS_ACCESS_KEY_ID,
//       secretAccessKey: AWS_SECRET_ACCESS_KEY,
//     });

//     if (!signedRequest.headers) {
//       throw new Error("Signing request failed: Headers missing");
//     }

//     // Fetch AWS HealthLake data
//     const response = await fetch(`https://${HEALTHLAKE_HOST}${resourcePath}`, {
//       method: options.method,
//       headers: signedRequest.headers as HeadersInit,
//     });

//     console.log(`API Response Status for ${resource}:`, response.status);

//     if (!response.ok) {
//       return res.status(response.status).json({ error: `AWS Error: ${response.status}` });
//     }

//     const data: unknown = await response.json();

//     return res.status(200).json(data);
//   } catch (error) {
//     console.error("Server Error:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }




import type { NextApiRequest, NextApiResponse } from "next";
import aws4 from "aws4";
import dotenv from "dotenv";

dotenv.config();

const AWS_REGION = process.env.AWS_REGION!;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID!;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY!;
const HEALTHLAKE_HOST = "healthlake.us-east-1.amazonaws.com";
const BASE_PATH = "/datastore/3128ef1470d37566fa0ab664b91e15d5/r4";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Extract and validate resource type
    const resourceParam = req.query.resource;
    const resource = Array.isArray(resourceParam) ? resourceParam[0] : resourceParam; // Ensure it's a string

    const allowedResources = ["Patient", "Condition", "DiagnosticReport"];
    if (!resource || !allowedResources.includes(resource)) {
      return res.status(400).json({ error: "Invalid or missing resource type. Use 'Patient', 'Condition', or 'DiagnosticReport'." });
    }

    // Construct the path dynamically
    const resourcePath = `${BASE_PATH}/${resource}`;

    // Define request options properly
    const options = {
      host: HEALTHLAKE_HOST,
      path: resourcePath,
      service: "healthlake",
      region: AWS_REGION,
      method: "GET",
      headers: {} as Record<string, string>,
    };

    // Sign the request
    const signedRequest = aws4.sign(options, {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    });

    if (!signedRequest.headers) {
      throw new Error("Signing request failed: Headers missing");
    }

    // Fetch AWS HealthLake data
    const response = await fetch(`https://${HEALTHLAKE_HOST}${resourcePath}`, {
      method: options.method,
      headers: signedRequest.headers as HeadersInit,
    });

    console.log(`API Response Status for ${resource}:`, response.status);

    if (!response.ok) {
      return res.status(response.status).json({ error: `AWS Error: ${response.status}` });
    }

    const data: unknown = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
