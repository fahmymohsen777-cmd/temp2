"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WeddingInvitation from "@/components/WeddingInvitation";
import type { InvitationData } from "@/types/invitation";

const sampleData: InvitationData = {
  groomName: "علي",
  brideName: "شهيناز",
  date: "2026-09-19T19:00:00",
  venueName: "قاعة الفردوس للأفراح",
  venueAddress: "١٥ شارع النيل، المعادي، القاهرة",
  locationUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d31.2357!3d29.9792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584573d3c67f0b%3A0x8ea1bf42fe8c5af9!2sMaadi%2C+Cairo+Governorate%2C+Egypt!5e0!3m2!1sen!2seg!4v1614000000000",
  galleryImages: [
    "/wedding_hero.png",
    "/gallery_1.png",
    "/gallery_2.png",
    "/gallery_3.png",
    "/gallery_4.png",
    "/gallery_5.png",
    "/gallery_6.png",
  ],
  musicUrl: "",
  message:
    "بسم الله الرحمن الرحيم\n\nيسعدنا ويشرّفنا أن ندعوكم لحضور حفل زفاف نجلنا الغالي\n\nونتمنى أن نرى بهجتكم معنا في هذه الليلة الجميلة",
  schedule: [
    { time: "٧:٠٠ م", title: "استقبال المدعوين", description: "تشريف الضيوف الكرام ومرحبًا بكم في حفل الزفاف.", icon: "🌹" },
    { time: "٨:٠٠ م", title: "العشاء", description: "تناول العشاء على أنغام الموسيقى الشرقية الراقية.", icon: "🍽️" },
    { time: "٩:٠٠ م", title: "دخول العروسين", description: "الدخلة المميزة للعريس علي والعروسة شهيناز.", icon: "💍" },
    { time: "٩:٣٠ م", title: "الرقصة الأولى", description: "أجمل لحظات العمر عالأغاني العربية الرومانسية.", icon: "💃" },
    { time: "١٠:٠٠ م", title: "تقطيع الكيك", description: "حفلة تقطيع التورتة وتوزيع الحلويات على الضيوف.", icon: "🎂" },
    { time: "١٠:٣٠ م", title: "أفراح ورقص", description: "سهرة فرح وراحة وبهجة على أحلى الأغاني.", icon: "🎶" },
    { time: "١٢:٠٠ ص", title: "ختام الحفل", description: "نودّع ضيوفنا الكرام بكل المحبة والامتنان.", icon: "🌙" },
  ],
};

type AppState = "ready" | "playing" | "done";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("ready");

  const handleStart = () => {
    if (appState !== "ready") return;
    setAppState("playing");
    
    // Video GIF duration is exactly 8 seconds
    setTimeout(() => {
      setAppState("done");
    }, 8500);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {appState !== "done" ? (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 flex items-center justify-center bg-[#efece6] overflow-hidden z-50"
          >
            <div className="relative w-full max-w-[430px] h-full sm:h-[90vh] sm:rounded-2xl sm:shadow-2xl overflow-hidden bg-[#efece6] flex items-center justify-center">
              <img 
                src={appState === "playing" ? `/intro.gif?t=${Date.now()}` : "/intro_poster.png"} 
                alt="Intro Video"
                className="w-full h-full object-cover"
              />
              
              <AnimatePresence>
                {appState === "ready" && (
                  <motion.div 
                    className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center cursor-pointer backdrop-blur-[2px]"
                    onClick={handleStart}
                    exit={{ opacity: 0 }}
                  >
                     <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-20 h-20 rounded-full bg-[#382216]/80 flex items-center justify-center shadow-2xl border-2 border-[#efece6]/30"
                     >
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="#efece6" className="ml-2">
                         <path d="M8 5v14l11-7z" />
                       </svg>
                     </motion.div>
                     <motion.p 
                        className="mt-6 text-[#382216] font-semibold text-lg bg-[#efece6]/90 px-6 py-2 rounded-full shadow-lg"
                        style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                     >
                       اضغط لبدء الدعوة
                     </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <WeddingInvitation data={sampleData} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
