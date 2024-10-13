import styles from "./page.module.css";
import TextGenerate from "@/app/text-generate/page";
import StreamingTextGenerate from "@/app/streaming-text-generate/page";
import StructuredDataGenerate from "@/app/structured-data-generate/page";
import StreamingStructuredDataGenerate from "@/app/streaming-structured-data-generate/page";
import ChatCompletion from "@/app/chat-completion/page";
import StreamingChatCompletion from "@/app/streaming-chat-completion/page";

export default function Home() {
  return (
    <>
      <h1>Vercel AI SDK Playground</h1>
      <a
        href="https://sdk.vercel.ai/examples/next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://sdk.vercel.ai/examples/next-app
      </a>
      <span>
        のExampleを参考に自前実装しながら理解する
        <br />
        <br />
      </span>
      <h2>Basic</h2>
      <span>ボタンのクリックをトリガーにOpenAI APIをコールするデモ</span>
      <div className={styles.grid}>
        <div>
          <h3>TextGenerate</h3>
          <span>非構造化テキストを取得する</span>
          <div>
            <TextGenerate />
          </div>
        </div>
        <div>
          <h3>StreamingTextGenerate</h3>
          <span>[Streaming] 非構造化テキストを取得する</span>
          <StreamingTextGenerate />
        </div>
        <div>
          <h3>StructuredDataGenerate</h3>
          <span>構造化テキストを取得する</span>
          <StructuredDataGenerate />
        </div>
        <div>
          <h3>StreamingStructuredDataGenerate</h3>
          <span>[Streaming] 構造化テキストを取得する</span>
          <StreamingStructuredDataGenerate />
        </div>
      </div>
      <h2>Chat</h2>
      <span>Chat形式で実装する</span>
      <div className={styles.grid}>
        <div>
          <h3>ChatComplation</h3>
          <span>質問に対して回答をする</span>
          <div>
            <ChatCompletion />
          </div>
        </div>
        <div>
          <h3>StreamingChatComplation</h3>
          <span>[Streaming]質問に対して回答をする</span>
          <div>
            <StreamingChatCompletion />
          </div>
        </div>
      </div>
    </>
  );
}
