"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;
const POP = [0.34, 1.56, 0.64, 1] as const;

const headlineLines = [
  { text: "Plan the night.", accent: false },
  { text: "Skip the group chat.", accent: true },
];

const rsvpChips = [
  { label: "Going", active: true },
  { label: "Maybe", active: false },
  { label: "Can't go", active: false },
];

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] px-6 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-[#1A1A1A]/10" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-[#3D5A50]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#3D5A50]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8553D]" />
            Now in beta
          </motion.div>

          <h1 className="mb-6 font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-[#1A1A1A]">
            {headlineLines.map((line, li) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  className={`inline-block ${
                    line.accent ? "italic text-[#C8553D]" : ""
                  }`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + li * 0.12,
                    ease: EASE,
                  }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-9 max-w-md text-lg leading-relaxed text-[#1A1A1A]/65"
          >
            Send one link, watch the RSVPs roll in. No spreadsheets, no
            fourteen-reply threads, no &quot;wait who&apos;s bringing the
            speaker.&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3.5"
          >
            <button
              onClick={() => router.push("/auth/sign-up?redirect=/events/new")}
              className="rounded-[10px] bg-[#1A1A1A] px-6 py-3.5 text-[15px] font-medium text-[#FAF6F0] transition-transform active:scale-[0.98]"
            >
              Create your first event
            </button>
            <button
              onClick={() => router.push("#how-it-works")}
              className="rounded-[10px] border border-[#1A1A1A]/10 px-6 py-3.5 text-[15px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A]/[0.03]"
            >
              See how it works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex gap-8 border-t border-[#1A1A1A]/10 pt-6 text-[13px] text-[#1A1A1A]/50"
          >
            <span>No app required for guests</span>
            <span>Free for events under 50</span>
          </motion.div>
        </div>

        {/* Animated invite card */}
        <div className="relative flex h-[420px] items-center justify-center md:h-[480px]">
          <motion.div
            initial={{ opacity: 0, rotate: -7, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, rotate: -3, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="absolute w-[280px] rounded-2xl border border-[#1A1A1A]/[0.08] bg-[#EFE7D6] p-7 shadow-[0_30px_60px_-20px_rgba(26,26,26,0.25)] sm:w-[300px]"
          >
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#3D5A50]">
              You&apos;re invited
            </p>
            <h3 className="mb-4 font-serif text-2xl font-medium text-[#1A1A1A]">
              Maya&apos;s rooftop send-off
            </h3>

            <div className="mb-5 space-y-1 text-[13.5px] leading-relaxed text-[#1A1A1A]/70">
              <div>Sat, Jul 18 — 7:00 PM</div>
              <div>The Greenhouse, Durban</div>
            </div>

            <div className="mb-5 flex gap-2">
              {rsvpChips.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.6, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.0 + i * 0.12,
                    ease: POP,
                  }}
                  className={`rounded-full px-3 py-1.5 text-[12.5px] font-medium ${
                    chip.active
                      ? "bg-[#3D5A50] text-[#FAF6F0]"
                      : "bg-[#1A1A1A]/[0.06] text-[#1A1A1A]/60"
                  }`}
                >
                  {chip.label}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {["#C8553D", "#3D5A50", "#8B6F47"].map((color, i) => (
                  <div
                    key={color}
                    style={{
                      background: color,
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                    className="h-[26px] w-[26px] rounded-full border-2 border-[#EFE7D6]"
                  />
                ))}
              </div>
              <span className="text-[12.5px] text-[#1A1A1A]/55">24 going</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 14 }}
            animate={{ opacity: 1, scale: 1, rotate: 14 }}
            transition={{ duration: 0.5, delay: 1.5, ease: POP }}
            className="absolute right-2 top-6 flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full border-2 border-[#FAF6F0]/40 bg-[#C8553D] font-serif text-[#FAF6F0] shadow-[0_12px_24px_-8px_rgba(200,85,61,0.5)] sm:right-4"
          >
            <span className="text-[10px] uppercase tracking-wide opacity-85">
              RSVP
            </span>
            <span className="text-lg font-semibold leading-tight">by</span>
            <span className="text-sm font-medium">Jul 12</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
