"use server";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export async function continueConversation(history: Message[]) {
  "use server";

  const { text, toolResults } = await generateText({
    model: openai("gpt-4o-mini"),
    system:
      "あなたは汎用的なチャットボットです。ユーザーの質問に丁寧に回答してください。",
    messages: history,
    tools: {
      getWeather: {
        description: "ある地点での天気を取得します",
        parameters: z.object({
          city: z.string().describe("天気を取得する都市の英語名"),
        }),
        execute: async ({ city }) => {
          const response = await fetch(
            `http://localhost:3000/api/weather?city=${city}`
          );
          if (!response.ok) {
            throw new Error("Weather API Error");
          }
          const data: WeatherResponse = await response.json();
          return `${city}の天気は${data.description}で、気温は${data.temperature}°Cです。`;
        },
      },
    },
  });

  return {
    messages: [
      ...history,
      {
        role: "assistant" as const,
        content:
          text || toolResults.map((toolResult) => toolResult.result).join("\n"),
      },
    ],
  };
}
