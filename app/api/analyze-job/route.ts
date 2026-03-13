import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    const transcript = formData.get("transcript") as string;

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // User requested gemini-3.1-flash
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const imagePart = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: image.type,
      },
    };

    const prompt = `
      Act as a Master Electrician. Analyze the provided image and the following field voice transcript: "${transcript || 'No transcript provided'}"
      
      Return a structured JSON object with these EXACT keys:
      1. equipmentSpotted: (String) What you see in the photo (e.g., '200A Square D Panel').
      2. extractedSpecs: (String) Any readable text, voltages, or amps.
      3. professionalSummary: (String) A clean, polished version of the field notes.
      
      Return ONLY valid JSON.
    `;

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text();

    // Clean up potential markdown code blocks from the LLM response
    const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
    const analysis = JSON.parse(cleanJson);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return NextResponse.json({ error: "Failed to analyze job" }, { status: 500 });
  }
}
