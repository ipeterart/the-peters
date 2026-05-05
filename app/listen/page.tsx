"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Listen() {
  const backRef = useRef<HTMLAnchorElement>(null);
  const [leftPos, setLeftPos] = useState(0);

  useEffect(() => {
    const update = () => {
      if (backRef.current) {
        setLeftPos(backRef.current.getBoundingClientRect().left);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Streaming links centered vertically, left-aligned with home nav */}
      <div
        className="fixed top-1/2 -translate-y-1/2 flex flex-col items-start gap-0 leading-[1.1] text-[clamp(1.28rem,3.2vw,2.56rem)] lowercase tracking-[-0.01em]"
        style={{
          fontFamily: '"neue-haas-grotesk-display-pr", sans-serif',
          fontWeight: 500,
          left: leftPos || undefined,
        }}
      >
        <a href="https://open.spotify.com/artist/187mvGLRODsnOWHqyXvU5V?si=g3MiOBrcS5CANJfqX6Ylzg" target="_blank" rel="noopener noreferrer" className="text-[#ef4136] hover:text-white">spotify</a>
        <a href="https://soundcloud.com/info-576565901" target="_blank" rel="noopener noreferrer" className="text-[#ef4136] hover:text-white">soundcloud</a>
        <a href="https://www.youtube.com/watch?v=QWrU_Kbz3iA" target="_blank" rel="noopener noreferrer" className="text-[#ef4136] hover:text-white">youtube</a>
      </div>

      {/* Invisible home layout to position "back" at same spot as home nav */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col leading-[0.78] text-[clamp(4rem,10vw,8rem)] font-bold lowercase tracking-[-0.04em] invisible" aria-hidden="true" style={{ fontFamily: '"neue-haas-grotesk-display-pr", sans-serif', fontWeight: 700 }}>
          <span>the peters</span>
          <span>the peters</span>
          <span>the peters</span>
          <span>the peters</span>
        </div>
        <div
          className="w-full mt-[3px] pl-[0.25em] text-[clamp(1.28rem,3.2vw,2.56rem)] lowercase tracking-[-0.01em]"
          style={{
            fontFamily: '"neue-haas-grotesk-display-pr", sans-serif',
            fontWeight: 500,
          }}
        >
          <Link ref={backRef} href="/" className="text-[#ef4136] hover:text-white">back</Link>
        </div>
      </div>
    </div>
  );
}
