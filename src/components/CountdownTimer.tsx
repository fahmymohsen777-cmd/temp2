"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units: { label: string; value: number }[] = [
    { label: "يوم",   value: timeLeft.days },
    { label: "ساعة",  value: timeLeft.hours },
    { label: "دقيقة", value: timeLeft.minutes },
    { label: "ثانية", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      dir="rtl"
      style={{
        backgroundColor: "#f2efe7",
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <ScrollReveal direction="fade" className="text-center">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <p
            style={{
              color: "#4a4a4a",
              fontSize: 11,
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: 12,
            }}
          >
            EVENT COUNTDOWN
          </p>

          {/*
            Arabic heading with CRITICAL descender fix:
            leading-none MUST never be used here.
            Always: lineHeight ≥ 1.55, paddingBottom: 24, marginBottom: 16
          */}
          <h2
            style={{
              fontFamily: "'Aref Ruqaa', serif",
              fontSize: "clamp(1.7rem, 7vw, 2.2rem)",
              fontWeight: 400,
              color: "#4a4a4a",
              lineHeight: 1.55,
              /* CRITICAL: prevents ح ش م descenders from clipping */
              paddingBottom: 24,
              marginBottom: 16,
            }}
          >
            باقي على الفرح
          </h2>

          <div
            style={{
              width: 80,
              height: 1,
              backgroundColor: "#959595",
              opacity: 0.3,
              margin: "0 auto",
            }}
          />
        </div>

        {/* ── Timer boxes — Tilda-style light minimal boxes ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 8,
            flexDirection: "row-reverse",
            flexWrap: "wrap",
          }}
        >
          {units.map((unit, i) => (
            <div
              key={unit.label}
              style={{ display: "flex", alignItems: "flex-end", gap: 8, flexDirection: "row-reverse" }}
            >
              {/* Timer block — white card with soft border matching Tilda */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(149, 149, 149, 0.25)",
                  borderRadius: 16,
                  boxShadow: "0 4px 16px rgba(74, 74, 74, 0.06)",
                  width: 70,
                  paddingTop: 18,
                  paddingBottom: 14,
                }}
              >
                {/* Number — Cormorant Garamond serif matches Tilda number style */}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.4rem",
                    fontWeight: 400,
                    color: "#4a4a4a",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {mounted ? pad(unit.value) : "00"}
                </span>

                {/* Label in Arabic */}
                <span
                  style={{
                    fontFamily: "'Noto Naskh Arabic', serif",
                    fontSize: 11,
                    color: "#4a4a4a",
                    opacity: 0.55,
                    marginTop: 8,
                  }}
                >
                  {unit.label}
                </span>
              </div>

              {/* Colon separator between units */}
              {i < units.length - 1 && (
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    color: "#4a4a4a",
                    opacity: 0.35,
                    marginBottom: 20,
                    lineHeight: 1,
                  }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Dua in Aref Ruqaa with proper descender fix */}
        <p
          style={{
            fontFamily: "'Aref Ruqaa', serif",
            fontSize: "1.0rem",
            color: "#4a4a4a",
            opacity: 0.5,
            marginTop: 40,
            lineHeight: 1.7,
            /* CRITICAL Arabic descender fix */
            paddingBottom: 24,
            marginBottom: 0,
          }}
        >
          اللهم بارك لهما وبارك عليهما وجمع بينهما في خير
        </p>
      </ScrollReveal>
    </section>
  );
}
