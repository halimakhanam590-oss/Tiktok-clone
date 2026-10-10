"use client";
import { useState } from "react";
const videos = [
  { user: "@halima_khan", desc: "My first TikTok clone ❤️🔥", likes: "12.5K" },
  { user: "@dhaka_vibes", desc: "Dhaka to Sylhet tour", likes: "8.2K" },
  { user: "@viral_bd", desc: "New dance challenge 2026", likes: "22K" },
];
export default function Home() {
  const [i, setI] = useState(0);
  const v = videos[i % videos.length];
  return (
    <div style={{ background: "#000", minHeight: "100vh", display: "flex", justifyContent: "center", color: "#fff" }}>
      <div style={{ width: "100%", maxWidth: 390, height: "100vh", background: "#111", display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ padding: 16, display: "flex", justifyContent: "space-between", fontWeight: "bold" }}><span>Following</span><span style={{ borderBottom: "2px solid white" }}>For You</span><span>🔍</span></div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ fontSize: 80 }}>▶️</div>
          <h2 style={{ marginTop: 20, fontSize: 20 }}>{v.user}</h2>
          <p style={{ marginTop: 10, color: "#ccc" }}>{v.desc}</p>
          <p style={{ marginTop: 20 }}>❤️ {v.likes} 💬 1.2K 🔗 Share</p>
          <button onClick={() => setI(i + 1)} style={{ marginTop: 30, padding: "10px 20px", background: "white", color: "black", borderRadius: 20, border: "none", fontWeight: "bold" }}>Next Video ⬆️</button>
        </div>
        <div style={{ padding: 12, display: "flex", justifyContent: "space-around", borderTop: "1px solid #333" }}><span>🏠 Home</span><span>🔍 Search</span><span>➕</span><span>💬 Inbox</span><span>👤 You</span></div>
      </div>
    </div>
  );
}
