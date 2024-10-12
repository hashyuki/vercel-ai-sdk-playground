"use server";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function generate(input: string) {
  const { text, finishReason, usage } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: input,
  });

  return { text, finishReason, usage };
}
