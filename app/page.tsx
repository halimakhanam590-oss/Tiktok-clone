"use client";
import { useState, useEffect } from "react";

export default function TikTokReal() {
  const [likes, setLikes] = useState(92700);
  const [liked, setLiked] = useState(false);
  const [viewers, setViewers] = useState(12400);

  useEffect(() => {
    const i = setInterval(() => setViewers(v => v + Math.floor(Math.random()*60-25)), 1500);
    return () => clearInterval(i);
  }, []);

  const feed = [];
  let v = 1;
  for (let i = 0; i < 40; i++) {
    if ((i+1)%16===0) feed.push({type:"live"});
    else feed.push({type:"video", id:v++});
  }

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <style>{`.hide::-webkit-scrollbar{display:none}.hide{scrollbar-width:none}`}</style>
      <div className="w-full max-w-[430px] h-[100vh] bg-black relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 z-30 flex justify-center gap-6 pt-4 pb-2 bg-gradient-to-b from-black/90 to-transparent">
          <span className="text-white/60 text-[14px]">Following</span>
          <span className="text-white font-bold text-[15px] border-b-2 border-white pb-1">For You</span>
        </div>

        <div className="absolute top-[58px] left-4 z-30 bg-white text-black px-3.5 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> LIVE
          <span className="bg-black/10 px-1.5 rounded text-[10px]">{viewers.toLocaleString()}</span>
        </div>

        <div className="h-full overflow-y-scroll snap-y snap-mandatory hide">
          {feed.map((item, idx) => item.type === "video"? (
            <div key={idx} className="h-[100vh] w-full snap-start relative bg-[#0a0a0a]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#122a44] via-[#1a3d5e] to-[#0a1a2e]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[100px] font-black text-white/[0.07] leading-none">9:16</p>
                  <p className="text-white text-[12px] tracking-[0.3em] mt-2 font-bold">VIDEO {item.id}</p>
                  <p className="text-white/40 text-[10px] mt-1">{((item.id-1)%15)+1}/15</p>
                </div>
              </div>
              <div className="absolute right-2.5 bottom-28 flex flex-col items-center gap-6 z-10">
                <div className="relative">
                  <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-white"></div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#fe2c55] rounded-full flex items-center justify-center text-white text-[12px] font-bold">+</div>
                </div>
                <button onClick={()=>{setLiked(!liked); setLikes(liked?likes-1:likes+1)}} className="flex flex-col items-center">
                  <div className={`text-[32px] ${liked?'text-[#fe2c55]': 'text-white'}`}>{liked?'❤️':'♡'}</div>
                  <span className="text-white text-[12px] font-semibold mt-1">{(likes/1000).toFixed(1)}K</span>
                </button>
                <div className="flex flex-col items-center"><span className="text-[26px]">💬</span><span className="text-white text-[12px] font-semibold">1.2K</span></div>
                <div className="flex flex-col items-center"><span className="text-[24px]">🔖</span><span className="text-white text-[12px] font-semibold">9.8K</span></div>
                <div className="flex flex-col items-center"><span className="text-[24px]">↗️</span><span className="text-white text-[12px] font-semibold">Share</span></div>
              </div>
              <div className="absolute bottom-[72px] left-3 right-20 z-10">
                <p className="text-white font-bold text-[14px]">@neon.nightdrive</p>
                <p className="text-white text-[14px] leading-5 mt-1">vertical only. no horizontal scroll. ever. #fyp</p>
                <p className="text-white/90 text-[13px] mt-2">♫ original sound - neon • {likes.toLocaleString()} likes</p>
              </div>
            </div>
          ) : (
            <div key={idx} className="h-[100vh] w-full snap-start bg-[#0f0f0f] relative">
              <div className="h-[55%] bg-zinc-900 relative flex items-center justify-center">
                <span className="text-6xl opacity-50">▶️</span>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2.5 py-1 rounded text-[11px] font-black">● LIVE</div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2.5 py-1 rounded-full text-[11px] font-bold">{viewers.toLocaleString()} watching</div>
              </div>
              <div className="p-4 bg-[#0f0f0f]">
                <p className="text-white font-bold text-[15px]">Road to Radiant - LIVE!</p>
                <button className="w-full bg-[#fe2c55] text-white py-3 rounded-full font-bold text-[14px] mt-4">WATCH LIVE</button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[56px] bg-black border-t border-zinc-800 flex justify-around items-center z-30">
          <div className="flex flex-col items-center"><span className="text-white text-[20px]">⌂</span><span className="text-white text-[9px] font-bold">Home</span></div>
          <div className="flex flex-col items-center opacity-60"><span className="text-white text-[18px]">◎</span><span className="text-white text-[9px]">Discover</span></div>
          <div className="relative">
            <div className="absolute -left-[3px] top-0 w-full h-full bg-[#25f4ee] rounded-[10px]"></div>
            <div className="absolute -right-[3px] top-0 w-full h-full bg-[#fe2c55] rounded-[10px]"></div>
            <div className="relative w-[46px] h-[28px] bg-white rounded-[10px] flex items-center justify-center">
              <span className="text-black text-[22px] font-bold leading-none">+</span>
            </div>
          </div>
          <div className="flex flex-col items-center opacity-60"><span className="text-white text-[18px]">◧</span><span className="text-white text-[9px]">Inbox</span></div>
          <div className="flex flex-col items-center opacity-60"><span className="text-white text-[18px]">○</span><span className="text-white text-[9px]">You</span></div>
        </div>
      </div>
    </div>
  );
              }
