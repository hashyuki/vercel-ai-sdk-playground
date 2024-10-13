import { NextResponse } from "next/server";

function getWeather({ city }: { city: string }) {
  const temperatures = () => Math.floor(Math.random() * 30) + 1; // 1°Cから30°Cの間のランダムな温度
  const descriptions = ["晴れ", "曇り", "雨", "雪", "霧", "嵐"];

  return {
    temperature: temperatures(),
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json(
      { error: "City parameter is required" },
      { status: 400 }
    );
  }

  const weather = getWeather({ city });
  return NextResponse.json(weather);
}
