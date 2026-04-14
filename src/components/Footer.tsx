"use client";

import ScrollReveal from "./ScrollReveal";

interface FooterProps {
  groomName: string;
  brideName: string;
}

export default function Footer({ groomName, brideName }: FooterProps) {
  return (
    <footer
      dir="rtl"
      style={{
        backgroundColor: "#f2efe7",
        paddingTop: 80,
        paddingBottom: 60,
        paddingLeft: 24,
        paddingRight: 24,
        borderTop: "1px solid rgba(149, 149, 149, 0.25)",
      }}
    >
      <ScrollReveal direction="fade" className="text-center">
        <div style={{ textAlign: "center" }}>
          {/* Top ornament — heart with lines */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                height: 1,
                width: 60,
                backgroundColor: "#959595",
                opacity: 0.3,
              }}
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21C12 21 3 14.5 3 9C3 6.23858 5.23858 4 8 4C9.65685 4 11.1569 4.76837 12 6C12.8431 4.76837 14.3431 4 16 4C18.7614 4 21 6.23858 21 9C21 14.5 12 21 12 21Z"
                fill="rgba(74, 74, 74, 0.1)"
                stroke="rgba(74, 74, 74, 0.4)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <div
              style={{
                height: 1,
                width: 60,
                backgroundColor: "#959595",
                opacity: 0.3,
              }}
            />
          </div>

          {/*
            Main Arabic calligraphy message.
            CRITICAL Arabic descender fix: lineHeight ≥ 1.55,
            paddingBottom: 24, marginBottom: 16.
            NEVER use leading-none here.
          */}
          <p
            style={{
              fontFamily: "'Aref Ruqaa', serif",
              fontSize: "clamp(1.9rem, 8vw, 2.4rem)",
              fontWeight: 400,
              color: "#4a4a4a",
              lineHeight: 1.55,
              /* CRITICAL Arabic descender fix */
              paddingBottom: 24,
              marginBottom: 16,
            }}
          >
            نتمنى نشوفكم معانا
          </p>

          {/* Couple names in Cormorant Garamond sans Arabic */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "#4a4a4a",
              opacity: 0.65,
              marginBottom: 32,
              letterSpacing: "0.04em",
            }}
          >
            {groomName} &amp; {brideName}
          </p>

          {/* Dua */}
          <p
            style={{
              fontFamily: "'Noto Naskh Arabic', serif",
              fontSize: 13,
              color: "#4a4a4a",
              opacity: 0.4,
              lineHeight: 2.0,
            }}
          >
            اللهم بارك لهما وبارك عليهما
            <br />
            وجمع بينهما في خير
          </p>

          {/* Bottom stamp */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                height: 1,
                width: 40,
                backgroundColor: "#959595",
                opacity: 0.2,
              }}
            />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 10,
                fontStyle: "italic",
                color: "#4a4a4a",
                opacity: 0.3,
                letterSpacing: "0.12em",
              }}
            >
              © {new Date().getFullYear()} — Made with love
            </p>
            <div
              style={{
                height: 1,
                width: 40,
                backgroundColor: "#959595",
                opacity: 0.2,
              }}
            />
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
