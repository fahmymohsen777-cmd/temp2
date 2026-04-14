"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  groomName: string;
  brideName: string;
  date: string;
  heroImage: string;
}

export default function HeroSection({
  groomName,
  brideName,
  date,
  heroImage,
}: HeroSectionProps) {
  const d = new Date(date);
  const toArabicNumerals = (n: number) =>
    String(n).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[parseInt(digit)]);

  const arabicMonths = [
    "يناير","فبراير","مارس","أبريل","مايو","يونيو",
    "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",
  ];

  const day       = toArabicNumerals(d.getDate());
  const monthName = arabicMonths[d.getMonth()];
  const year      = toArabicNumerals(d.getFullYear());

  return (
    <section
      id="hero"
      dir="rtl"
      style={{
        backgroundColor: "#f2efe7",
        /*
          CRITICAL: overflow-x-hidden ONLY — never overflow-hidden.
          scroll indicators animate vertically and get clipped otherwise.
        */
        overflowX: "hidden",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ── Decorative background texture strip — like Tilda's leaf pattern ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(74, 74, 74, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Top horizontal divider line (matches #959595 from Tilda) ── */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#959595",
          opacity: 0.35,
          marginTop: 0,
        }}
      />

      {/* ── Subtle date display (no labels) ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3 }}
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#2b2b2b",
            fontSize: 15,
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            opacity: 0.7,
          }}
        >
          {d.getDate()}.{String(d.getMonth() + 1).padStart(2, "0")}.{d.getFullYear()}
        </p>
      </motion.div>

      {/* ── Main couples names ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", paddingTop: 32, paddingLeft: 24, paddingRight: 24 }}
      >
        {/* Sub-label */}
        <p
          style={{
            color: "#4a4a4a",
            fontSize: 13,
            fontFamily: "'Noto Naskh Arabic', serif",
            opacity: 0.55,
            marginBottom: 6,
          }}
        >
          يُشرّفنا دعوتكم لحضور حفل زفاف
        </p>

        {/*
          MAIN NAMES — Aref Ruqaa calligraphy.
          CRITICAL: paddingBottom & marginBottom prevent descender clipping.
          Never use leading-none on this element.
        */}
        <h1
          className="arabic-heading"
          style={{
            fontFamily: "'Aref Ruqaa', serif",
            fontSize: "clamp(2.6rem, 10vw, 3.8rem)",
            fontWeight: 400,
            color: "#4a4a4a",
            lineHeight: 1.55,
            /* CRITICAL Arabic descender fix */
            paddingBottom: 24,
            marginBottom: 12,
          }}
        >
          {groomName} &amp; {brideName}
        </h1>


      </motion.div>

      {/* ── Arch-shaped Hero Image ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          marginTop: 28,
          paddingLeft: 32,
          paddingRight: 32,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Outer arch container — the Tilda border-radius: 40px 40px 40px 40px border */}
        <div
          style={{
            position: "relative",
            width: "min(72vw, 300px)",
            border: "2px solid #949494",
            borderRadius: 40,
            overflow: "hidden",
            boxShadow: "0 18px 50px rgba(74, 74, 74, 0.13)",
          }}
        >
          {/* Inner arch image — border-radius: 300px 300px 0px 0px on the image itself */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: "300px 300px 0px 0px",
              overflow: "hidden",
            }}
          >
            <Image
              src={heroImage}
              alt={`${groomName} و ${brideName}`}
              fill
              priority
              sizes="(max-width: 480px) 72vw, 300px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>

          {/* Graceful details bar below the arch photo */}
          <div
            style={{
              backgroundColor: "#f2efe7",
              paddingTop: 16,
              paddingBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#4a4a4a",
                fontSize: 12,
                fontFamily: "'Noto Naskh Arabic', serif",
                opacity: 0.55,
                letterSpacing: "0.06em",
              }}
            >
              {day} {monthName} {year}م
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          paddingTop: 40,
          paddingBottom: 60,
          position: "relative",
          zIndex: 10,
        }}
      >
        <span
          style={{
            color: "#4a4a4a",
            fontSize: 10,
            opacity: 0.45,
            fontFamily: "'Noto Naskh Arabic', serif",
            letterSpacing: "0.08em",
          }}
        >
          اسكرول للأسفل
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <svg width="20" height="13" viewBox="0 0 30 18" fill="none">
            <path
              d="M1.25 1.25L15 14.5L28.75 1.25"
              stroke="#4a4a4a"
              strokeOpacity="0.45"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
