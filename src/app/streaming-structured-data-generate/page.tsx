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
          const { object } = await generate("直近のメッセージを取得。");

          for await (const partialObject of readStreamableValue(object)) {
            if (partialObject) {
              setGeneration(
                JSON.stringify(partialObject.notifications, null, 2)
              );
            }
          }
        }}
      >
        直近のメッセージを取得
      </Button>

      <pre>{generation}</pre>
    </div>
  );
}
