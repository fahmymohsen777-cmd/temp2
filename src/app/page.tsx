"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WeddingInvitation from "@/components/WeddingInvitation";
import { INVITATION_DATA } from "@/config";

type AppState = "playing" | "done";

// ⚠️ Set this to match your GIF duration in ms.
// The crossfade will start EXACTLY this many ms after load,
// finishing before the GIF loops. (1.5s GIF → exit at 1400ms)
const GIF_DURATION = 1400;

export default function Home() {
  const [appState, setAppState] = useState<AppState>("playing");

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setAppState("done");
    }, GIF_DURATION);

    return () => clearTimeout(exitTimer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {appState !== "done" ? (
          /* ── Splash screen — plays /intro.gif then crossfades out ── */
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f2efe7",
              zIndex: 50,
              /* CRITICAL: overflow-x-hidden only, never overflow-hidden */
              overflowX: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 430,
                height: "100%",
                backgroundColor: "#f2efe7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/intro.gif"
                alt="مقدمة الدعوة"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </motion.div>
        ) : (
          /* ── Main invitation — fades in after splash ── */
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <WeddingInvitation data={INVITATION_DATA} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
