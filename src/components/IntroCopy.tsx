"use client";

import ScrollReveal from "./ScrollReveal";

interface IntroCopyProps {
  groomName: string;
  brideName: string;
  message?: string;
}

export default function IntroCopy({ groomName, brideName, message }: IntroCopyProps) {
  const lines = [
    "يسعدنا ويشرّفنا أن ندعوكم لحضور حفل زفاف",
    `${groomName} و ${brideName}`,
    "نتمنى أن تشاركونا أجمل لحظات العمر وأسعد أيامه",
    "فبوجودكم يكتمل فرحنا ويعلو سرورنا",
  ];

  return (
    <section id="intro" className="bg-transparent py-12 px-5" dir="rtl">
      <ScrollReveal direction="up">
        <div className="bg-white rounded-2xl px-8 py-10 mb-8 relative overflow-hidden shadow-[0_16px_40px_rgba(56,34,22,0.06)] text-center border border-[#e8e4db]">
          {/* Corner decorations */}
          <span className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[#382216]/20 rounded-tr-sm" />
          <span className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#382216]/20 rounded-tl-sm" />
          <span className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#382216]/20 rounded-br-sm" />
          <span className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-[#382216]/20 rounded-bl-sm" />

          {/* Top ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#382216]/15" />
            <span style={{ color: "#382216", fontSize: 16, opacity: 0.8 }}>❧</span>
            <div className="h-px w-10 bg-[#382216]/15" />
          </div>

          {/* Bismillah */}
          <ScrollReveal direction="fade" delay={0.1}>
            <p
              className="text-[#382216] text-lg mb-5"
              style={{ fontFamily: "'Aref Ruqaa', serif", fontSize: "1.3rem" }} // Swapped to cursive calligraphy
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
          </ScrollReveal>

          {/* Divider */}
          <div className="w-10 h-px bg-[#382216]/10 mx-auto mb-6" />

          {/* Message lines */}
          <ScrollReveal direction="up" delay={0.2}>
            {message ? (
              <p
                className="text-[#382216]/80 text-[0.97rem] leading-[1.8] whitespace-pre-line"
                style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              >
                {message}
              </p>
            ) : (
              <div className="space-y-4">
                {lines.map((line, i) => (
                  <p
                    key={i}
                    className={
                      i === 1 // The names
                        ? "text-[#382216] text-3xl font-normal py-2"
                        : "text-[#382216]/70 text-[0.95rem] leading-relaxed"
                    }
                    style={{ 
                      fontFamily: i === 1 ? "'Aref Ruqaa', serif" : "'Noto Naskh Arabic', serif" 
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
          </ScrollReveal>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <div className="h-px w-10 bg-[#382216]/15" />
            <span style={{ color: "#382216", fontSize: 12, opacity: 0.5 }}>✦</span>
            <div className="h-px w-10 bg-[#382216]/15" />
          </div>

          {/* Abstract brush stroke or line art in background */}
          <div className="absolute bottom-3 left-5 opacity-10 pointer-events-none">
            <svg width="55" height="24" viewBox="0 0 80 28" fill="none">
              <path d="M2 24 Q20 4 40 16 Q55 26 78 6" stroke="#382216" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
