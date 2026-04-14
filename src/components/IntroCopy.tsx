"use client";

import ScrollReveal from "./ScrollReveal";

interface IntroCopyProps {
  groomName: string;
  brideName: string;
  message?: string;
}

export default function IntroCopy({ groomName, brideName, message }: IntroCopyProps) {
  const defaultLines = [
    "يسعدنا ويشرّفنا أن ندعوكم لحضور حفل زفاف",
    `${groomName} و ${brideName}`,
    "نتمنى أن تشاركونا أجمل لحظات العمر",
    "فبوجودكم يكتمل فرحنا ويعلو سرورنا",
  ];

  return (
    <section
      id="intro"
      dir="rtl"
      style={{
        backgroundColor: "#f0efec",
        paddingTop: 56,
        paddingBottom: 56,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <ScrollReveal direction="up">
        {/* ── Section heading ── */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p
            style={{
              color: "#4a4a4a",
              fontSize: 11,
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: 8,
            }}
          >
            DEAR FAMILY AND FRIENDS
          </p>

          {/* Thin divider matching Tilda */}
          <div
            style={{
              width: 120,
              height: 1,
              backgroundColor: "#959595",
              opacity: 0.3,
              margin: "12px auto",
            }}
          />
        </div>

        {/* ── Message card ── */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 20,
            padding: "36px 28px",
            boxShadow: "0 8px 30px rgba(74, 74, 74, 0.07)",
            border: "1px solid rgba(149, 149, 149, 0.2)",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Corner brackets — elegant touch */}
          <span
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 18,
              height: 18,
              borderTop: "1.5px solid rgba(74, 74, 74, 0.2)",
              borderRight: "1.5px solid rgba(74, 74, 74, 0.2)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              width: 18,
              height: 18,
              borderTop: "1.5px solid rgba(74, 74, 74, 0.2)",
              borderLeft: "1.5px solid rgba(74, 74, 74, 0.2)",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: 14,
              right: 14,
              width: 18,
              height: 18,
              borderBottom: "1.5px solid rgba(74, 74, 74, 0.2)",
              borderRight: "1.5px solid rgba(74, 74, 74, 0.2)",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              width: 18,
              height: 18,
              borderBottom: "1.5px solid rgba(74, 74, 74, 0.2)",
              borderLeft: "1.5px solid rgba(74, 74, 74, 0.2)",
            }}
          />

          {/* Bismillah in Aref Ruqaa — with descender fix */}
          <ScrollReveal direction="fade" delay={0.1}>
            <p
              style={{
                fontFamily: "'Aref Ruqaa', serif",
                fontSize: "1.3rem",
                color: "#4a4a4a",
                lineHeight: 1.55,
                /* CRITICAL Arabic descender fix */
                paddingBottom: 24,
                marginBottom: 8,
              }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
          </ScrollReveal>

          <div
            style={{
              width: 40,
              height: 1,
              backgroundColor: "#959595",
              opacity: 0.25,
              margin: "0 auto 20px",
            }}
          />

          {/* Message text */}
          <ScrollReveal direction="up" delay={0.2}>
            {message ? (
              <p
                style={{
                  fontFamily: "'Noto Naskh Arabic', serif",
                  fontSize: "0.97rem",
                  lineHeight: 2.0,
                  color: "#4a4a4a",
                  opacity: 0.85,
                  whiteSpace: "pre-line",
                }}
              >
                {message}
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {defaultLines.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily:
                        i === 1
                          ? "'Aref Ruqaa', serif"
                          : "'Noto Naskh Arabic', serif",
                      fontSize: i === 1 ? "1.8rem" : "0.95rem",
                      color: "#4a4a4a",
                      opacity: i === 1 ? 1 : 0.7,
                      lineHeight: i === 1 ? 1.55 : 1.8,
                      /* CRITICAL Arabic descender fix for name line */
                      paddingBottom: i === 1 ? 24 : 0,
                      marginBottom: i === 1 ? 8 : 0,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
          </ScrollReveal>

          {/* Bottom ornament */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 24,
            }}
          >
            <div
              style={{
                height: 1,
                width: 40,
                backgroundColor: "#959595",
                opacity: 0.25,
              }}
            />
            <span style={{ color: "#4a4a4a", fontSize: 10, opacity: 0.4 }}>✦</span>
            <div
              style={{
                height: 1,
                width: 40,
                backgroundColor: "#959595",
                opacity: 0.25,
              }}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
