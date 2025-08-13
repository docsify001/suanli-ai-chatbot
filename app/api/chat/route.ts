import { createOllama } from "ollama-ai-provider";
import { frontendTools } from "@assistant-ui/react-ai-sdk";
import { streamText } from "ai";

export const maxDuration = 30;

const ollama = createOllama({
  baseURL: process.env.OLLAMA_BASE_URL || "http://localhost:11434/api",
});

const defaultModel = process.env.DEFAULT_MODEL || "qwen3:32b";
export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();

  const result = streamText({
    model: ollama(defaultModel),
    messages,
    toolCallStreaming: true,
    system,
    tools: {
      ...frontendTools(tools),
      // add backend tools here
    },
  });

  return result.toDataStreamResponse();
}