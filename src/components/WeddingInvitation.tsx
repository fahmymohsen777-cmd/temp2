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
 * The top‑level template component.  Feed it an `InvitationData` object from
 * your database / CMS and every section renders automatically.
 *
 * Layout is constrained to a max of 430px (phone width) and centered on
 * larger screens so the invitation always feels like a mobile experience.
 *
 * @example
 * ```tsx
 * <WeddingInvitation data={invitationFromDB} />
 * ```
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
  } = data;

  return (
    // Outer wrapper — light cream page background on desktop
    <div className="min-h-screen bg-[#e8e4db] flex justify-center">
      {/* Phone-width container — max 430px, centered */}
      <main
        id="invitation"
        className="w-full max-w-[430px] bg-[#efece6] text-[#382216] antialiased selection:bg-[#382216]/10 shadow-[0_0_80px_rgba(0,0,0,0.1)]"
      >
        {/* Optional ambient music */}
        {musicUrl && <AudioPlayer musicUrl={musicUrl} />}

        {/* ── Sections ── */}
        <HeroSection
          groomName={groomName}
          brideName={brideName}
          date={date}
          heroImage="/couple_portrait.png"
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
