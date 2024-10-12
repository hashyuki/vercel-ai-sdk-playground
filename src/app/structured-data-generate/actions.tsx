"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export async function generate(input: string) {
  "use server";

  const { object: notifications } = await generateObject({
    model: openai("gpt-4o-mini"),
    system: "メッセージアプリには次の3つの通知があります。",
    prompt: input,
    schema: z.object({
      notifications: z.array(
        z.object({
          name: z.string().describe("架空の人物の名前。"),
          message: z
            .string()
            .describe("絵文字やリンクは使用しないでください。"),
          minutesAgo: z.number(),
        })
      ),
    }),
  });

  return { notifications };
}
