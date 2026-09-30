"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import SectionWrapper from "./SectionWrapper";

const groupColors: Record<string, string> = {
  "📋": "from-emerald-500/20 to-teal-500/20 border-emerald-500/20",
  "🔄": "from-sky-500/20 to-cyan-500/20 border-sky-500/20",
  "🛠️": "from-amber-500/20 to-orange-500/20 border-amber-500/20",
  "⚙️": "from-violet-500/20 to-indigo-500/20 border-violet-500/20",
  "🤝": "from-rose-500/20 to-pink-500/20 border-rose-500/20",
};

const badgeColors: Record<string, string> = {
  "📋": "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20",
  "🔄": "bg-sky-500/10 border-sky-500/20 text-sky-300 hover:bg-sky-500/20",
  "🛠️": "bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20",
  "⚙️": "bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20",
  "🤝": "bg-rose-500/10 border-rose-500/20 text-rose-300 hover:bg-rose-500/20",
};

const featuredColors: Record<string, string> = {
  "📋": "bg-emerald-500/25 border-emerald-400/60 text-emerald-200 font-bold shadow-[0_0_10px_rgba(16,185,129,0.45)] hover:shadow-[0_0_16px_rgba(16,185,129,0.65)] hover:bg-emerald-500/35 scale-105",
  "🔄": "bg-sky-500/25 border-sky-400/60 text-sky-200 font-bold shadow-[0_0_10px_rgba(56,189,248,0.45)] hover:shadow-[0_0_16px_rgba(56,189,248,0.65)] hover:bg-sky-500/35 scale-105",
  "🛠️": "bg-amber-500/25 border-amber-400/60 text-amber-200 font-bold shadow-[0_0_10px_rgba(245,158,11,0.45)] hover:shadow-[0_0_16px_rgba(245,158,11,0.65)] hover:bg-amber-500/35 scale-105",
  "⚙️": "bg-violet-500/25 border-violet-400/60 text-violet-200 font-bold shadow-[0_0_10px_rgba(139,92,246,0.45)] hover:shadow-[0_0_16px_rgba(139,92,246,0.65)] hover:bg-violet-500/35 scale-105",
  "🤝": "bg-rose-500/25 border-rose-400/60 text-rose-200 font-bold shadow-[0_0_10px_rgba(244,63,94,0.45)] hover:shadow-[0_0_16px_rgba(244,63,94,0.65)] hover:bg-rose-500/35 scale-105",
};

export default function Skills() {
  const { lang } = useLanguageStore();
  const t = content.skills[lang];

  return (
    <SectionWrapper id="skills" className="bg-[#0a1018]">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#10B981] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#10B981] to-[#38BDF8] rounded-full mx-auto" />
        {/* Legend */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-white/50 text-xs font-mono">{t.featured_note}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {t.groups.map((group) => {
          const featuredSet = new Set(("featured" in group && group.featured) ? group.featured as string[] : []);
          return (
            <div
              key={group.name}
              className={`relative bg-gradient-to-br ${groupColors[group.icon] ?? "from-white/5 to-white/5 border-white/10"} border rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm`}
            >
              <div className="mb-4">
                <h3 className="text-white font-bold text-base">{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const isFeatured = featuredSet.has(skill);
                  return (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs border cursor-default transition-all duration-200 ${
                        isFeatured
                          ? (featuredColors[group.icon] ?? "bg-white/20 border-white/50 text-white font-bold scale-105")
                          : (badgeColors[group.icon] ?? "bg-white/5 border-white/10 text-white/70 hover:bg-white/10")
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
