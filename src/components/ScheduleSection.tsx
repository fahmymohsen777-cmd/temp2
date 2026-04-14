"use client";

import ScrollReveal from "./ScrollReveal";
import type { ScheduleItem } from "@/types/invitation";

interface ScheduleSectionProps {
  schedule: ScheduleItem[];
  date: string;
}

export default function ScheduleSection({ schedule, date }: ScheduleSectionProps) {
  const d = new Date(date);

  const arabicDays = [
    "الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت",
  ];
  const arabicMonths = [
    "يناير","فبراير","مارس","أبريل","مايو","يونيو",
    "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",
  ];

  const toArabicNumerals = (n: number) =>
    String(n).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[parseInt(digit)]);

  const dayName   = arabicDays[d.getDay()];
  const dayNum    = toArabicNumerals(d.getDate());
  const monthName = arabicMonths[d.getMonth()];
  const year      = toArabicNumerals(d.getFullYear());
  const formattedDate = `${dayName}، ${dayNum} ${monthName} ${year}م`;

  return (
    <section
      id="schedule"
      dir="rtl"
      style={{
        backgroundColor: "#f2efe7",
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {/* ── Header ── */}
      <ScrollReveal direction="up" className="text-center">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          {/* Full-width divider line above — matches Tilda layout */}
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#959595",
              opacity: 0.3,
              marginBottom: 24,
            }}
          />

          <p
            style={{
              color: "#4a4a4a",
              fontSize: 11,
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: 10,
            }}
          >
            EVENT TIMELINE
          </p>

          {/*
            Arabic heading — CRITICAL descender fix applied.
            lineHeight ≥ 1.55, paddingBottom: 24, marginBottom: 16.
          */}
          <h2
            style={{
              fontFamily: "'Aref Ruqaa', serif",
              fontSize: "clamp(1.7rem, 7vw, 2.2rem)",
              fontWeight: 400,
              color: "#4a4a4a",
              lineHeight: 1.55,
              paddingBottom: 24,
              marginBottom: 16,
            }}
          >
            ترتيب السهرة
          </h2>

          <p
            style={{
              fontFamily: "'Noto Naskh Arabic', serif",
              fontSize: 12,
              color: "#4a4a4a",
              opacity: 0.45,
              marginBottom: 16,
            }}
          >
            {formattedDate}
          </p>

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
      </ScrollReveal>

      {/* ── Vertical Timeline ── */}
      <div style={{ position: "relative" }}>
        {/*
          The center vertical line — matching Tilda's thin stroke="#959595"
          Runs through the entire timeline.
        */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "50%",
            transform: "translateX(50%)",
            width: 1,
            backgroundColor: "#959595",
            opacity: 0.3,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {schedule.map((item, idx) => {
            const isLeft = idx % 2 === 0; // alternate sides

            return (
              <ScrollReveal
                key={`${item.time}-${idx}`}
                direction={isLeft ? "right" : "left"}
                delay={idx * 0.1}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingBottom: 40,
                    gap: 0,
                    flexDirection: isLeft ? "row" : "row-reverse",
                  }}
                >
                  {/* Content block — left or right */}
                  <div
                    style={{
                      flex: 1,
                      paddingLeft: isLeft ? 0 : 20,
                      paddingRight: isLeft ? 20 : 0,
                      textAlign: isLeft ? "right" : "left",
                    }}
                  >
                    {/* Time — Cormorant Garamond serif matching Tilda number/time style */}
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 19,
                        fontWeight: 500,
                        color: "#4a4a4a",
                        lineHeight: 1.55,
                        marginBottom: 2,
                      }}
                    >
                      {item.time}
                    </p>

                    {/* Title */}
                    <p
                      style={{
                        fontFamily: "'Noto Naskh Arabic', serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#4a4a4a",
                        lineHeight: 1.5,
                        marginBottom: 4,
                      }}
                    >
                      {item.icon && (
                        <span style={{ marginLeft: 6, marginRight: 6 }}>
                          {item.icon}
                        </span>
                      )}
                      {item.title}
                    </p>

                    {/* Description */}
                    {item.description && (
                      <p
                        style={{
                          fontFamily: "'Noto Naskh Arabic', serif",
                          fontSize: 12,
                          color: "#4a4a4a",
                          opacity: 0.55,
                          lineHeight: 1.7,
                        }}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Center dot — on the vertical line */}
                  <div
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      width: 20,
                      paddingTop: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: "#4a4a4a",
                        opacity: 0.4,
                        border: "2px solid #f2efe7",
                        outline: "1.5px solid rgba(149, 149, 149, 0.5)",
                        outlineOffset: 0,
                      }}
                    />
                  </div>

                  {/* Empty spacer on opposite side */}
                  <div style={{ flex: 1 }} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#959595",
          opacity: 0.3,
          marginTop: 8,
        }}
      />
    </section>
  );
}
