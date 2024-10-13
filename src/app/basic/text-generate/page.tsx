"use client";

import { useState } from "react";
import { generate } from "./actions";
import { Button } from "@/components/button/button";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  const [generation, setGeneration] = useState<string>("");

  return (
    <div>
      <Button
        onClick={async () => {
          const { text } = await generate("なぜ空は青いのですか？");
          setGeneration(text);
        }}
      >
        空が青い理由を生成
      </Button>
      <div>{generation}</div>
    </div>
  );
}
