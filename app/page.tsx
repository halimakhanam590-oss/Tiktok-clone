"use client";
import { useState } from "react";

const videos = [
  { id: 1, user: "@halima_khan", desc: "My first TikTok clone ❤️", likes: "12.5K" },
  { id: 2, user: "@tiktok_lover", desc: "Viral dance 2026", likes: "8.2K" },
  { id: 3, user: "@dhaka_boy", desc: "Dhaka vibes", likes: "15K" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const video = videos[index]!;

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <div className="w-full max-w-[400px] h-screen relative bg-zinc-900 flex flex-col justify-between">
        <div className="p-4 flex justify-between font-bold">
          <span>Following</span><span>For You</span>
        </div>

        <div className="flex-1 flex items-center justify-center text-center p-6">
          <div>
            <p className="text-[80px]">▶️</p>
            <p className="text-xl font-bold mt-4">{video.user}</p>
            <p className="mt-2 text-zinc-300">{video.desc}</p>
            <p className="mt-6">❤️ {video.likes}</p>
          </div>
        </div>

        <div className="absolute right-3 bottom-32 flex flex-col gap-6 text-center">
          <button onClick={()=>setIndex((index+1)%videos.length)} className="text-3xl">⬆️<br/><span className="text-xs">Next</span></button>
        </div>

        <div className="p-4 flex justify-around border-t border-zinc-800">
          <span>🏠</span><span>🔍</span><span>➕</span><span>💬</span><span>👤</span>
        </div>
      </div>
    </div>
  );
}
