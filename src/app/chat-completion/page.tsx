"use client";

import { useState, useEffect, useRef } from "react";
import { continueConversation } from "./actions";
import { Button } from "@/components/button/button";
import { TextInput } from "@/components/text-input/text-input";
import { IoIosSend } from "react-icons/io";
import styles from "./page.module.css";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const chatAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    <div>
      <div className={styles.chatArea} ref={chatAreaRef}>
        {conversation.map((message, index) => (
          <div key={index}>
            {message.role}: {message.content}
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <TextInput
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Button
          size="icon"
          onClick={async () => {
            const { messages } = await continueConversation([
              ...conversation,
              { role: "user", content: input },
            ]);

            setInput("");
            setConversation(messages);
          }}
        >
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}
