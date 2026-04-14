"use client";

import type { InvitationData } from "@/types/invitation";
import HeroSection from "./HeroSection";
import IntroCopy from "./IntroCopy";
import CountdownTimer from "./CountdownTimer";
import GallerySection from "./GallerySection";

import MapSection from "./MapSection";
import Footer from "./Footer";
import AudioPlayer from "./AudioPlayer";

interface WeddingInvitationProps {
  data: InvitationData;
}

/**
 * WeddingInvitation
 *
 * The top-level template component. Feed it an `InvitationData` object and
 * every section renders automatically.
 *
 * Design: Inspired by template3.tilda.ws — warm parchment palette (#f2efe7),
 * soft charcoal text (#4a4a4a), Cormorant Garamond for English/numbers,
 * and Aref Ruqaa for all Arabic calligraphy.
 *
 * Layout: 430px max-width phone card, centered on desktop, strictly RTL.
 */
export default function WeddingInvitation({ data }: WeddingInvitationProps) {
  const {
    groomName,
    brideName,
    date,
    venueName,
    venueAddress,
    locationUrl,
    galleryImages,
    musicUrl,
    message,
    schedule,
  } = data;

  return (
    // Outer wrapper — light cream page background matching the Tilda palette
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f2efe7",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/*
        Phone-width container — max 430px, centered.
        NOTE: Never use overflow-hidden here; use overflow-x-hidden
        to allow vertical scroll-triggered animations to work.
      */}
      <main
        id="invitation"
        style={{
          width: "100%",
          maxWidth: 430,
          backgroundColor: "#f2efe7",
          color: "#4a4a4a",
          overflowX: "hidden",
          boxShadow: "0 0 80px rgba(74, 74, 74, 0.08)",
        }}
      >
        {/* Optional ambient music */}
        {musicUrl && <AudioPlayer musicUrl={musicUrl} />}

        {/* ── Sections ── */}
        <HeroSection
          groomName={groomName}
          brideName={brideName}
          date={date}
          heroImage={galleryImages[0] ?? "/wedding_hero.png"}
        />

        <IntroCopy
          groomName={groomName}
          brideName={brideName}
          message={message}
        />

        <CountdownTimer targetDate={date} />

        <GallerySection images={galleryImages} />


        {locationUrl && (
          <MapSection
            locationUrl={locationUrl}
            venueName={venueName}
            venueAddress={venueAddress}
          />
        )}

        <Footer groomName={groomName} brideName={brideName} />
      </main>
    </div>
  );
}
