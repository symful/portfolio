export default function ContactInformation() {
  return (
    <div class="min-h-[80vh] py-12 px-4 md:px-8 flex items-center justify-center">
      <div class="max-w-2xl w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800 p-8 md:p-12 shadow-lg">
        <h2 class="text-electric text-3xl md:text-4xl font-pixel mb-8 text-center">
          Contact <span class="text-white">Me</span>
        </h2>

        <div class="space-y-6">
          {/* WhatsApp */}
          <div class="group flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-electric hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300">
            <div class="p-3 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
              <svg
                class="w-6 h-6 text-electric"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.338c.545 1.486.992 2.7 1.076 2.892.084.19.168.19.388.06.22-.128 1.204-.8 1.916-1.23.712-.43.84-.36.96-.24.12.12.48.594.6.713.12.12.24.18.36.06.12-.12.6-.72.84-1.2.24-.48.36-.36.6-.24.24.12 1.524.8 1.8.96.27.16.36.24.36.36-.01.12-.18.6-.24.72-.06.12-.12.18-.24.24-.12.06-.24.06-.36.06-.12 0-.24-.06-.36-.06-.12 0-1.08-.66-1.32-.84-.24-.18-.42-.3-.6-.3-.18 0-.36.06-.48.24-.12.18-.48.66-.6.84-.12.18-.24.24-.42.24-.18 0-.36-.06-.54-.18-.18-.12-.66-.54-1.26-1.2-.6-.66-1.02-1.14-1.14-1.32-.12-.18-.012-.3.084-.42.096-.12.192-.18.288-.3.096-.12.144-.18.192-.3.048-.12.048-.24-.048-.36-.096-.12-.864-1.98-1.2-2.7-.32-.7-.64-.6-.84-.6-.216 0-.456.036-.72.12" />
              </svg>
            </div>
            <div>
              <h3 class="text-gray-400 font-pixel text-sm">WhatsApp</h3>
              <a
                href="https://wa.me/6283179175748"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-electric transition-colors"
              >
                +62 831 7917 5748
              </a>
            </div>
          </div>

          {/* Discord */}
          <div class="group flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-neonPurple hover:shadow-[0_0_15px_#9D00FF] transition-all duration-300">
            <div class="p-3 bg-gray-800 rounded-lg group-hover:bg-neonPurple group-hover:bg-opacity-20 transition-colors">
              <svg
                class="w-6 h-6 text-neonPurple"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09 0 .11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12 0-1.17.84-2.13 1.89-2.13 1.06 0 1.9.96 1.89 2.13 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12 0-1.17.84-2.13 1.89-2.13 1.06 0 1.9.96 1.89 2.13 0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
            </div>
            <div>
              <h3 class="text-gray-400 font-pixel text-sm">Discord</h3>
              <p class="text-white">noahfinch</p>
            </div>
          </div>

          {/* Email */}
          <div class="group flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-hotPink hover:shadow-[0_0_15px_#FF00F5] transition-all duration-300">
            <div class="p-3 bg-gray-800 rounded-lg group-hover:bg-hotPink group-hover:bg-opacity-20 transition-colors">
              <svg
                class="w-6 h-6 text-hotPink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-gray-400 font-pixel text-sm">Email</h3>
              <a
                href="mailto:kemalardian17@gmail.com"
                class="text-white hover:text-hotPink transition-colors"
              >
                kemalardian17@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-500 font-mono text-sm">
            // Let's build something amazing together //
          </p>
        </div>
      </div>
    </div>
  );
}
