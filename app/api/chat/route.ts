import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// Initialize the Gemini AI model securely on the server
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    // 1. Get the message the user typed in the chat box
    const { message } = await req.json();

    // 2. Give Gemini a personality and send the message
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful, encouraging AI study buddy for a free, open-source online electrical trades school called 'Open Electrician'. Keep your answers concise, friendly, and factual. Here is the student's message: ${message}`
    });

    // 3. Send Gemini's answer back to the chat widget
    return NextResponse.json({ text: response.text });
    
  } catch (error) {
    console.error('AI Error:', error);
    return NextResponse.json(
      { text: "Whoops, I had a short circuit! Make sure your API key is connected." }, 
      { status: 500 }
    );
  }
}