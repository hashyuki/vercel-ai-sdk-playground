import styles from "./page.module.css";
import TextGenerate from "@/app/text-generate/page";
import StreamTextGenerate from "@/app/streaming-text-generate/page";
import StructuredDataGenerate from "@/app/structured-data-generate/page";
import StreamingStructuredDataGenerate from "@/app/streaming-structured-data-generate/page";
export default function Home() {
  return (
    <>
      <h1>Basic</h1>
      <p>ボタンのクリックをトリガーにOpenAI APIをコールするデモ</p>
      <div className={styles.grid}>
        <div>
          <h2>TextGenerate</h2>
          <p>非構造化テキストを取得する</p>
          <div>
            <TextGenerate />
          </div>
        </div>
        <div>
          <h2>StreamTextGenerate</h2>
          <p>[Streaming] 非構造化テキストを取得する</p>
          <StreamTextGenerate />
        </div>
        <div>
          <h2>StructuredDataGenerate</h2>
          <p>構造化テキストを取得する</p>
          <StructuredDataGenerate />
        </div>
        <div>
          <h2>StreamStructuredDataGenerate</h2>
          <p>[Streaming] 構造化テキストを取得する</p>
          <StreamingStructuredDataGenerate />
        </div>
      </div>
    </>
  );
}
