export default function AboutMe() {
  return (
    <div class="min-h-[80vh] py-12 px-4 md:px-8 flex items-center justify-center">
      <div class="max-w-2xl w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800 p-8 md:p-12 shadow-lg">
        <h2 class="text-electric text-3xl md:text-4xl font-pixel mb-8 text-center">
          About <span class="text-white">Me</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div class="space-y-4">
            <div class="group flex items-start gap-4">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
                <span class="text-electric text-xl">👤</span>
              </div>
              <div>
                <h3 class="text-gray-400 font-pixel text-sm">Age</h3>
                <p class="text-white">18 years old</p>
              </div>
            </div>

            <div class="group flex items-start gap-4">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
                <span class="text-electric text-xl">🎓</span>
              </div>
              <div>
                <h3 class="text-gray-400 font-pixel text-sm">Education</h3>
                <p class="text-white">High school graduate</p>
              </div>
            </div>

            <div class="group flex items-start gap-4">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
                <span class="text-electric text-xl">🌏</span>
              </div>
              <div>
                <h3 class="text-gray-400 font-pixel text-sm">Background</h3>
                <p class="text-white">Indonesian, Muslim, Bangkanese</p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div class="space-y-4">
            <div class="group flex items-start gap-4">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
                <span class="text-electric text-xl">📚</span>
              </div>
              <div>
                <h3 class="text-gray-400 font-pixel text-sm">Reading</h3>
                <p class="text-white">Manga & Manhwa enthusiast</p>
              </div>
            </div>

            <div class="group flex items-start gap-4">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
                <span class="text-electric text-xl">📺</span>
              </div>
              <div>
                <h3 class="text-gray-400 font-pixel text-sm">Watching</h3>
                <p class="text-white">Anime & Donghua</p>
              </div>
            </div>

            <div class="group flex items-start gap-4">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
                <span class="text-electric text-xl">💻</span>
              </div>
              <div>
                <h3 class="text-gray-400 font-pixel text-sm">Development</h3>
                <p class="text-white">Full-stack programmer</p>
                <p class="text-gray-300 text-sm mt-1">
                  (Desktop, Mobile, Web, Server)
                </p>
              </div>
            </div>

            <div class="group flex items-start gap-4">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
                <span class="text-electric text-xl">🎮</span>
              </div>
              <div>
                <h3 class="text-gray-400 font-pixel text-sm">Passion</h3>
                <p class="text-white">Game development interest</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-500 font-mono text-sm">
            // Make your own definition of me //
          </p>
        </div>
      </div>
    </div>
  );
}
