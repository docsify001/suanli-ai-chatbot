import { createOllama } from "ollama-ai-provider";
import { frontendTools } from "@assistant-ui/react-ai-sdk";
import { streamText } from "ai";

export const maxDuration = 30;

const ollama = createOllama({
  baseURL: process.env.OLLAMA_BASE_URL || "https://d08061808-ollama-webui-qwen3te-285-dpj5pbsb-11434.550c.cloud/api",
});

export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();

  const result = streamText({
    model: ollama("qwen3:32b"),
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