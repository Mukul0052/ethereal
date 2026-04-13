import { NextResponse } from "next/server";
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text' field in request body." },
        { status: 400 }
      );
    }

    const groq = createGroq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { text: polishedPrompt } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      system:
        "You are an expert prompt engineer. Your sole job is to take a user's raw input and rewrite it into a highly effective, clear, and detailed prompt designed for a large language model. DO NOT answer the prompt. DO NOT include introductory or concluding conversational text (e.g., 'Here is the polished prompt:'). ONLY output the new, rewritten prompt text itself.",
      prompt: `Rewrite this to be a better prompt: ${text}`,
    });

    return NextResponse.json({ polished: polishedPrompt.trim() });
  } catch (error: any) {
    console.error("Polish Prompt API Error:", error.message || error);
    return NextResponse.json(
      { error: "Failed to polish prompt." },
      { status: 500 }
    );
  }
}
