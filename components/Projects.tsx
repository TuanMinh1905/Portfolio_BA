"use client";

import { useLanguageStore } from "@/store/languageStore";
import { content } from "@/data/content";
import SectionWrapper from "./SectionWrapper";

const projectGradients = [
  "from-[#10B981]/20 to-[#38BDF8]/20 border-[#10B981]/20",
  "from-[#38BDF8]/20 to-[#10B981]/20 border-[#38BDF8]/20",
];

const glowColors = ["group-hover:shadow-[#10B981]/20", "group-hover:shadow-[#38BDF8]/20"];

const techColorMap: Record<string, string> = {
  "Requirements Analysis": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "User Stories": "bg-teal-500/10 text-teal-300 border-teal-500/20",
  "REST API specs": "bg-sky-500/10 text-sky-300 border-sky-500/20",
  "BPMN": "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "BPMN 2.0": "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "Nuxt.js context": "bg-green-500/10 text-green-300 border-green-500/20",
  "SEO strategy": "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "Business Analysis": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "Use Case Diagrams": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "ERD": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Agile / Scrum": "bg-amber-500/10 text-amber-300 border-amber-500/20",
  "AI Integration specs": "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "SQL specs": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "Functional Spec": "bg-rose-500/10 text-rose-300 border-rose-500/20",
  "UML Diagrams": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "Business Flow Design": "bg-teal-500/10 text-teal-300 border-teal-500/20",
  "Architecture Design": "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "Test Scenarios": "bg-amber-500/10 text-amber-300 border-amber-500/20",
  "GPT-4o-mini": "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "User story": "bg-teal-500/10 text-teal-300 border-teal-500/20",
  "Đặc tả REST API": "bg-sky-500/10 text-sky-300 border-sky-500/20",
  "Ngữ cảnh Nuxt.js": "bg-green-500/10 text-green-300 border-green-500/20",
  "Chiến lược SEO": "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "Phân tích nghiệp vụ": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "Sơ đồ use case": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "Đặc tả tích hợp AI": "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "Sơ đồ use case VI": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "Đặc tả SQL": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "Đặc tả chức năng": "bg-rose-500/10 text-rose-300 border-rose-500/20",
  "Sơ đồ UML": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "Thiết kế luồng nghiệp vụ": "bg-teal-500/10 text-teal-300 border-teal-500/20",
  "Thiết kế kiến trúc": "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "Kịch bản kiểm thử": "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

function getTechClass(tech: string) {
  return techColorMap[tech] ?? "bg-white/5 text-white/60 border-white/10";
}

export default function Projects() {
  const { lang } = useLanguageStore();
  const t = content.projects[lang];

  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#10B981] font-mono text-sm mb-2">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#10B981] to-[#38BDF8] rounded-full mx-auto" />
      </div>

      <div className="space-y-10">
        {t.items.map((project, idx) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden bg-gradient-to-br ${projectGradients[idx % 2]} border rounded-3xl p-8 md:p-10 hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl ${glowColors[idx % 2]}`}
          >
            {/* Decorative corner accent */}
            <div className={`absolute top-0 right-0 w-48 h-48 rounded-bl-[80px] opacity-30 ${
              idx % 2 === 0
                ? "bg-gradient-to-bl from-[#10B981]/20 to-transparent"
                : "bg-gradient-to-bl from-[#38BDF8]/20 to-transparent"
            }`} />

            {/* Card content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#10B981]/20 text-[#6ee7b7] border border-[#10B981]/30"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{project.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">
                  {lang === "en" ? "BA Highlights" : "Điểm nổi bật BA"}
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => {
                    const isFeatured = "featuredHighlights" in project && (project.featuredHighlights as number[]).includes(i);
                    return (
                      <li key={i} className="flex gap-3 items-start">
                        <span className={`${isFeatured ? "text-[#F59E0B] drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]" : "text-[#10B981]"} mt-0.5 flex-shrink-0 text-sm`}>–</span>
                        <span className={`${isFeatured ? "text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" : "text-white/70"} text-sm leading-relaxed`}>{h}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Tech / Methods */}
              <div className="mb-8">
                <h4 className="text-white/40 text-xs font-mono uppercase tracking-widest mb-3">
                  {lang === "en" ? "Methods & Tools" : "Phương pháp & công cụ"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechClass(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {(() => {
                  const links = project.links as Record<string, string | undefined>;
                  return (
                    <>
                      {links.live && (
                        <a
                          href={links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#38BDF8] text-white text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/30 transition-all duration-300"
                        >
                          {t.view_live}
                        </a>
                      )}
                      {links.github && (
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-[#10B981]/50 hover:bg-[#10B981]/10 transition-all duration-300"
                        >
                          {t.view_github}
                        </a>
                      )}
                      {links.demo && (
                        <a
                          href={links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full border border-[#38BDF8]/30 text-[#38BDF8] text-sm font-semibold hover:bg-[#38BDF8]/10 hover:scale-105 transition-all duration-300"
                        >
                          {t.view_demo}
                        </a>
                      )}
                      {links.diagram && (
                        <a
                          href={links.diagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full border border-[#F59E0B]/40 text-[#F59E0B] text-sm font-semibold hover:bg-[#F59E0B]/10 hover:scale-105 hover:shadow-[#F59E0B]/20 transition-all duration-300"
                        >
                          {t.view_diagram}
                        </a>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
