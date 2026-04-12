"use client";

import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  musicUrl: string;
}

export default function AudioPlayer({ musicUrl }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!musicUrl) return;
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = 0.18;
    audioRef.current = audio;

    // browsers block autoplay – we try silently
    const tryPlay = () => {
      audio.play().catch(() => {
        /* ignore */
      });
    };
    document.addEventListener("click", tryPlay, { once: true });
    document.addEventListener("touchstart", tryPlay, { once: true });

    return () => {
      audio.pause();
      audio.src = "";
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, [musicUrl]);

  return null; // invisible — music fades in on first user interaction
}
