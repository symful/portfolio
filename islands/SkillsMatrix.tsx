import { useState } from "preact/hooks";

const SKILLS = [
  { name: "Flutter", level: 90, category: "mobile" },
  { name: "Next.JS", level: 85, category: "frontend" },
  { name: "Tailwind", level: 95, category: "frontend" },
  { name: "Deno", level: 80, category: "backend" },
  { name: "Node.JS", level: 85, category: "backend" },
  { name: "Bun", level: 70, category: "backend" },
  { name: "TypeScript", level: 90, category: "language" },
  { name: "AssemblyScript", level: 65, category: "language" },
  { name: "C#", level: 75, category: "language" },
  { name: "Go", level: 70, category: "language" },
  { name: "SQL", level: 70, category: "database" },
  { name: "MongoDB", level: 90, category: "database" },
];

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section class="py-16 px-4 md:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-white text-3xl md:text-4xl font-pixel mb-8 text-center">
          <span class="text-electric">Tech</span> Stack
        </h2>

        <div class="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "frontend", "backend", "mobile", "language", "database"].map(
            (
              category,
            ) => (
              <button
                onClick={() => setActiveCategory(category)}
                class={`px-4 py-2 rounded-full font-pixel ${
                  activeCategory === category
                    ? "bg-electric text-black"
                    : "text-white border border-electric"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ),
          )}
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.filter((skill) =>
            activeCategory === "all" || skill.category === activeCategory
          ).map((skill) => (
            <div class="p-4 border border-gray-800 rounded-lg hover:(border-electric shadow-neon)">
              <h3
                class="text-white font-pixel text-xl mb-2 truncate"
                style={{
                  fontSize: `clamp(0.875rem, ${
                    13 / skill.name.length
                  }rem, 1.25rem)`,
                }}
                title={skill.name}
              >
                {skill.name}
              </h3>
              <div class="w-full bg-gray-800 rounded-full h-2.5">
                <div
                  class="h-2.5 rounded-full bg-gradient-to-r from-neonPurple to-electric"
                  style={{ width: `${skill.level}%` }}
                >
                </div>
              </div>
              <p class="text-gray-400 text-sm mt-1">{skill.level}% mastery</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
