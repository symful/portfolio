const projects = [{
  name: "EscapeAI",
  description: "A game to solve puzzles by writing code",
  tech: "Flutter/Flame",
  url: "https://escapeai-demo.deno.dev",
  accent: "electric",
}, {
  name: "Puppeto",
  description: "A simplified PHP interpreter",
  tech: "Go/ANTLR4",
  url: "https://github.com/MarionetteEnsemble/Puppeto",
  accent: "neonPurple",
}, {
  name: "Crayon",
  description: "A toy-language with simple syntax",
  tech: "Go/ANTLR4",
  url: "https://github.com/symful/Crayon",
  accent: "hotPink",
}];

export default function ProjectList() {
  return (
    <div class="min-h-[80vh] py-12 px-4 md:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-white text-3xl md:text-4xl font-pixel mb-8 text-center">
          <span class="text-electric">My</span> Projects
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              class={`
                relative p-6 border border-gray-800 rounded-lg 
                hover:border-${project.accent} hover:shadow-[0_0_15px_var(--tw-shadow-color)]
                shadow-${project.accent} transition-all duration-300
                overflow-hidden group
              `}
            >
              {/* Glow effect */}
              <div
                class={`
                absolute inset-0 bg-${project.accent} opacity-0 
                group-hover:opacity-10 transition-opacity duration-300
                blur-[1px]
              `}
              >
              </div>

              <h3
                class={`
                text-2xl font-pixel mb-2 
                text-${project.accent}
              `}
              >
                {project.name}
              </h3>

              <p class="text-gray-300 mb-4">{project.description}</p>

              <div class="flex items-center gap-2">
                <div class={`w-2 h-2 rounded-full bg-${project.accent}`}></div>
                <span class="text-sm text-gray-400 font-mono">
                  {project.tech}
                </span>
              </div>

              <div
                class={`
                absolute bottom-4 right-4 text-xs text-${project.accent} 
                opacity-0 group-hover:opacity-100 transition-opacity
                flex items-center gap-1
              `}
              >
                <span>Click to open</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                  </path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
