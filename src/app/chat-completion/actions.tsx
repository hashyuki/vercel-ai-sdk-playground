"use server";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function continueConversation(history: Message[]) {
  "use server";

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    system:
      "あなたは汎用的なチャットボットです。ユーザーの質問に丁寧に回答してください。",
    messages: history,
  });

  return {
    messages: [
      ...history,
      {
        role: "assistant" as const,
        content: text,
      },
    ],
  };
}
