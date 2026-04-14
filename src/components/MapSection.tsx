"use client";

import ScrollReveal from "./ScrollReveal";

interface MapSectionProps {
  locationUrl: string;
  venueName: string;
  venueAddress: string;
}

export default function MapSection({ locationUrl, venueName, venueAddress }: MapSectionProps) {
  if (!locationUrl) return null;

  return (
    <section
      id="location"
      dir="rtl"
      style={{
        backgroundColor: "#f0efec",
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {/* Header */}
      <ScrollReveal direction="up" className="text-center">
        <div style={{ textAlign: "center", marginBottom: 32 }}>
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
            WHERE?
          </p>

          {/*
            Arabic heading with CRITICAL descender fix.
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
            {venueName}
          </h2>

          <p
            style={{
              fontFamily: "'Noto Naskh Arabic', serif",
              fontSize: 13,
              color: "#4a4a4a",
              opacity: 0.6,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            {venueAddress}
          </p>

          <div
            style={{
              width: 60,
              height: 1,
              backgroundColor: "#959595",
              opacity: 0.3,
              margin: "0 auto",
            }}
          />
        </div>
      </ScrollReveal>

      {/* Map embed */}
      <ScrollReveal direction="up" delay={0.15}>
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 20,
            overflow: "hidden",
            border: "1.5px solid rgba(149, 149, 149, 0.25)",
            boxShadow: "0 10px 30px rgba(74, 74, 74, 0.09)",
          }}
        >
          <iframe
            src={locationUrl}
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`خريطة ${venueName}`}
          />
        </div>
      </ScrollReveal>

      {/* Directions button — matches Tilda's simple action button style */}
      <ScrollReveal direction="up" delay={0.25}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <a
            href={`https://maps.google.com/maps?q=${encodeURIComponent(venueAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              paddingTop: 11,
              paddingBottom: 11,
              paddingLeft: 28,
              paddingRight: 28,
              backgroundColor: "#4a4a4a",
              color: "#f2efe7",
              borderRadius: 999,
              fontFamily: "'Noto Naskh Arabic', serif",
              fontSize: 13,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(74, 74, 74, 0.2)",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                fill="currentColor"
              />
            </svg>
            اعرض على الخريطة
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
