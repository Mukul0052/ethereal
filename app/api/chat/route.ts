import { createGroq } from "@ai-sdk/groq";
import { streamText, convertToModelMessages } from "ai";
import { createClient } from "@/lib/supabase/server";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  // Auth check
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { messages, systemPrompt } = await req.json();

  // Convert UI messages to model messages
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system:
      systemPrompt ||
      "You are Ethereal AI, a helpful and knowledgeable assistant.",
    messages: modelMessages,
  });

  return result.toTextStreamResponse();
}
