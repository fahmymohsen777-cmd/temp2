"use client";

import ScrollReveal from "./ScrollReveal";
import type { ScheduleItem } from "@/types/invitation";

interface ScheduleSectionProps {
  schedule: ScheduleItem[];
  date: string;
}

export default function ScheduleSection({ schedule, date }: ScheduleSectionProps) {
  const d = new Date(date);

  const arabicDays = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
  const arabicMonths = [
    "يناير","فبراير","مارس","أبريل","مايو","يونيو",
    "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",
  ];

  const toArabicNumerals = (n: number) =>
    String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);

  const dayName   = arabicDays[d.getDay()];
  const dayNum    = toArabicNumerals(d.getDate());
  const monthName = arabicMonths[d.getMonth()];
  const year      = toArabicNumerals(d.getFullYear());
  const formattedDate = `${dayName}، ${dayNum} ${monthName} ${year}م`;

  return (
    <section id="schedule" className="bg-[#292f38] py-12 px-5" dir="rtl">
      {/* Header */}
      <ScrollReveal direction="up" className="text-center mb-10">
        <p
          className="text-[#e2cd96]/55 tracking-[0.25em] text-[0.62rem] uppercase mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          برنامج الحفل
        </p>
        <h2
          className="text-[#e2cd96] text-2xl font-light mb-2"
          style={{ fontFamily: "'Noto Naskh Arabic', serif", fontWeight: 500 }}
        >
          ترتيب السهرة
        </h2>
        <p className="text-white/35 text-xs tracking-wide" style={{ fontFamily: "'Noto Naskh Arabic', serif" }}>
          {formattedDate}
        </p>
        <div className="w-12 h-px bg-[#e2cd96]/30 mx-auto mt-5" />
      </ScrollReveal>

      {/* Vertical timeline */}
      <div className="relative">
        {/* Line — on the right for RTL */}
        <div className="absolute right-4 top-0 bottom-0 w-px bg-[#e2cd96]/20" />

        <div className="space-y-0">
          {schedule.map((item, idx) => (
            <ScrollReveal key={`${item.time}-${idx}`} direction="left" delay={idx * 0.1}>
              <div className="relative flex gap-5 pb-8 last:pb-0 flex-row-reverse">
                {/* Dot — on the right */}
                <div className="relative z-10 flex-shrink-0 w-8 flex items-start justify-center pt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e2cd96] ring-2 ring-[#292f38] shadow-[0_0_8px_rgba(226,205,150,0.6)]" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/5 border border-[#e2cd96]/10 rounded-xl px-4 py-4 hover:border-[#e2cd96]/25 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1 flex-row-reverse justify-end">
                    {item.icon && <span className="text-sm">{item.icon}</span>}
                    <span
                      className="text-[#e2cd96] text-sm"
                      style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <h3
                    className="text-white text-base font-normal mb-1 text-right"
                    style={{ fontFamily: "'Noto Naskh Arabic', serif", fontWeight: 500 }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p
                      className="text-white/40 text-xs leading-relaxed text-right"
                      style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
