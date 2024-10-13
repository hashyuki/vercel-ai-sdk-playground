import styles from "./page.module.css";
import BatchTextGeneration from "@/app/text-generation/batch/page";
import StreamingTextGeneration from "@/app/text-generation/streaming/page";
import BatchStructuredDataGeneration from "@/app/structured-data-generation/batch/page";
import StreamingStructuredDataGeneration from "@/app/structured-data-generation/streaming/page";
import BatchChatGeneration from "@/app/chat/batch/page";
import StreamingChatGeneration from "@/app/chat/streaming/page";

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
      <span>
        言語モデルでできる最も基本的なことの1つは、テキストを生成することです。このセクションでは、テキストを生成し、それをクライアントにストリーミングする方法を学びます。
        <br />
        テキストだけでなく、好きなスキーマを与えて構造化データを生成し、それをクライアントにストリーミングすることも学びます。
      </span>
      <div className={styles.grid}>
        <div>
          <h3>/text-generation/batch</h3>
          <span>【Batch】非構造化テキストを取得する</span>
          <div>
            <BatchTextGeneration />
          </div>
        </div>
        <div>
          <h3>/text-generation/streaming</h3>
          <span>【Streaming】 非構造化テキストを取得する</span>
          <StreamingTextGeneration />
        </div>
        <div>
          <h3>/structured-data-generation/batch</h3>
          <span>【Batch】構造化テキストを取得する</span>
          <BatchStructuredDataGeneration />
        </div>
        <div>
          <h3>/structured-data-generation/streaming</h3>
          <span>【Streaming】 構造化テキストを取得する</span>
          <StreamingStructuredDataGeneration />
        </div>
      </div>
      <h2>Chat</h2>
      <span>
        これまで、単一のプロンプトを使ってテキストと構造化データを生成する方法を学んできました。このセクションでは、メッセージを使用して言語モデルに一連のメッセージを追加し、会話のコンテキストに基づいて応答を生成する方法を学びます。
      </span>
      <div className={styles.grid}>
        <div>
          <h3>/chat/batch</h3>
          <span>【Batch】ユーザーの質問に対して回答する</span>
          <div>
            <BatchChatGeneration />
          </div>
        </div>
        <div>
          <h3>/chat/streaming</h3>
          <span>【Streaming】ユーザーの質問に対して回答する</span>
          <div>
            <StreamingChatGeneration />
          </div>
        </div>
      </div>
    </>
  );
}
