import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

import {
  streamText,
  UIMessage,
  convertToModelMessages,
} from "ai";

const provider = createOpenAICompatible({
  name: 'vllm',
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || '',
  includeUsage: true, // Include usage information in streaming responses
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: provider(process.env.OPENAI_MODEL || "Qwen/Qwen3-4B"),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
