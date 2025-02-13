import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // ✅ Properly type `req.body` to avoid `any`
  const { message } = req.body as { message: string };

  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful medical assistant." },
        { role: "user", content: String(message) } // ✅ Ensure it's a string
      ],
      model: "gpt-4",
    });

    return res.status(200).json({ reply: response.choices[0]?.message?.content ?? "No response" });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return res.status(500).json({ error: "Error fetching response" });
  }
}



