"use client";

import { useState } from "react";
import { generate } from "./actions";
import { readStreamableValue } from "ai/rsc";
import { Button } from "@/components/button/button";
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  const [generation, setGeneration] = useState<string>("");

  return (
    <div>
      <Button
        onClick={async () => {
          const { output } = await generate("なぜ空は青いのですか？");

          for await (const delta of readStreamableValue(output)) {
            setGeneration(
              (currentGeneration) => `${currentGeneration}${delta}`
            );
          }
        }}
      >
        空が青い理由を生成
      </Button>
      <div>{generation}</div>
    </div>
  );
}
