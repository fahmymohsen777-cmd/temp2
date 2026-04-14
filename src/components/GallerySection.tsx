"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface GallerySectionProps {
  images: string[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  // Skip the first image (used as hero), use the rest for gallery
  const galleryImgs = images.slice(1, 7);

  return (
    <section
      id="gallery"
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
      <ScrollReveal direction="fade" className="text-center">
        <div style={{ textAlign: "center", marginBottom: 36 }}>
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
            OUR MEMORIES
          </p>

          {/*
            Arabic calligraphy heading — CRITICAL descender fix applied.
            lineHeight ≥ 1.55, paddingBottom: 24, marginBottom: 16.
            NEVER use leading-none here.
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
            لحظات من قلب الحكاية
          </h2>

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

      {/* ── Gallery Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }}
      >
        {/* First image — full width (arch-shaped, tall) */}
        {galleryImgs[0] && (
          <ScrollReveal direction="up" delay={0} className="col-span-2">
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                /* Arch-shape exactly as in Tilda: top rounded, bottom straight */
                borderRadius: "120px 120px 12px 12px",
                overflow: "hidden",
                border: "1.5px solid rgba(149, 149, 149, 0.2)",
                boxShadow: "0 8px 24px rgba(74, 74, 74, 0.08)",
              }}
            >
              <Image
                src={galleryImgs[0]}
                alt="لحظة من ألبوم الذكريات"
                fill
                sizes="420px"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.7s ease",
                }}
                className="group-hover:scale-105"
              />
            </div>
          </ScrollReveal>
        )}

        {/* Remaining — 2 per row, arch-shaped (pill-top) */}
        {galleryImgs.slice(1).map((src, idx) => (
          <ScrollReveal
            key={src}
            direction={idx % 2 === 0 ? "right" : "left"}
            delay={0.08 * idx}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                /* Arch photo shape — pure top pill exactly like Tilda sample image */
                borderRadius: "999px 999px 12px 12px",
                overflow: "hidden",
                border: "1.5px solid rgba(149, 149, 149, 0.2)",
                boxShadow: "0 6px 18px rgba(74, 74, 74, 0.07)",
              }}
            >
              <Image
                src={src}
                alt={`ذكرى ${idx + 2}`}
                fill
                sizes="200px"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.7s ease",
                }}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
