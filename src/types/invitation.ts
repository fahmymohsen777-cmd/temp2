// ──────────────────────────────────────────────────────────────────────────────
// Invitation Data Types
// All fields are designed to be populated from a database / CMS
// ──────────────────────────────────────────────────────────────────────────────

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon?: string; // optional emoji or icon key
}

export interface InvitationData {
  groomName: string;
  brideName: string;
  /** ISO-8601 date string, e.g. "2026-09-19T12:00:00" */
  date: string;
  /** Venue display name shown in the schedule */
  venueName: string;
  /** Venue address text */
  venueAddress: string;
  /**
   * Google Maps embed URL (already formatted with `?pb=…`).
   * Pass an empty string to hide the map section.
   */
  locationUrl: string;
  /** Public paths or remote URLs for the gallery grid */
  galleryImages: string[];
  /** URL to a background music file (mp3 / ogg).  Optional. */
  musicUrl?: string;
  /** Wedding day schedule items */
  schedule: ScheduleItem[];
  /** Optional personalised message shown in the intro card */
  message?: string;
}
