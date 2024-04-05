"use client";
import { Client } from "./Client";

export default function Home() {
  return (
    <main className="flex n flex-col items-center ">
      <div className="z-10 max-w-5xl w-full items-center justify-between ">
        <Client />
      </div>
    </main>
  );
}
