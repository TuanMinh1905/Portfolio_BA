"use client";

import { useEffect, useState } from "react";
import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";

export default function Hero() {
  const { lang } = useLanguageStore();
  const t = content.hero[lang];
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t.roles;
    const currentRole = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, charIndex + 1));
        setCharIndex((p) => p + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedRole(currentRole.substring(0, charIndex - 1));
        setCharIndex((p) => p - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, t.roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#10B981]/8 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/8 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#F59E0B]/5 rounded-full blur-[100px]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.8) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top bar accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent" />
      </div>

      <div className="max-w-4xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 mb-6 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#10B981] font-mono text-xs font-medium">
            {lang === "en" ? "Open to BA opportunities" : "Sẵn sàng cho cơ hội BA"}
          </span>
        </div>

        {/* Greeting */}
        <p className="text-[#10B981] font-mono text-sm md:text-base mb-4 animate-fade-in-up animation-delay-200">
          {t.greeting}
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up animation-delay-400">
          {t.name}
        </h1>

        {/* Typing role */}
        <div className="h-12 flex items-center justify-center mb-6 animate-fade-in-up animation-delay-600">
          <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#38BDF8]">
            {displayedRole}
          </span>
          <span className="text-[#10B981] text-3xl ml-1 animate-blink">|</span>
        </div>

        {/* Description */}
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-800">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-1000">
          <a
            id="hero-cta-projects"
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#10B981] to-[#38BDF8] text-white font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/30 transition-all duration-300"
          >
            {t.cta_projects}
          </a>
          <a
            id="hero-cta-contact"
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-[#10B981]/60 hover:bg-[#10B981]/10 transition-all duration-300"
          >
            {t.cta_contact}
          </a>
          <a
            id="hero-cta-cv"
            href="/cv.pdf"
            download
            className="px-8 py-3 rounded-full border border-[#38BDF8]/30 text-[#38BDF8] font-semibold text-sm hover:bg-[#38BDF8]/10 hover:scale-105 transition-all duration-300"
          >
            {t.cta_cv}
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-[#10B981]/60 to-transparent" />
          <span className="text-[#10B981]/50 text-xs font-mono">scroll</span>
        </div>
      </div>
    </section>
  );
}
