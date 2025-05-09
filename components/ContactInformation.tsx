import DiscordSVG from "./Discord.svg.tsx";
import EmailSVG from "./Email.svg.tsx";
import GithubSVG from "./Github.svg.tsx";
import WhatsAppSVG from "./WhatsApp.svg.tsx";

export default function ContactInformation() {
  return (
    <div class="min-h-[80vh] py-12 px-4 md:px-8 flex items-center justify-center">
      <div class="max-w-2xl w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-800 p-8 md:p-12 shadow-lg">
        <h2 class="text-electric text-3xl md:text-4xl font-pixel mb-8 text-center">
          Contact <span class="text-white">Me</span>
        </h2>

        <div class="space-y-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/6283179175748"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-electric hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300"
          >
            <div class="p-3 bg-gray-800 rounded-lg group-hover:bg-electric group-hover:bg-opacity-20 transition-colors">
              <WhatsAppSVG />
            </div>
            <div class="flex-1">
              <h3 class="text-gray-400 font-pixel text-sm group-hover:text-electric transition-colors">
                WhatsApp
              </h3>
              <p class="text-white group-hover:text-electric transition-colors">
                +62 831 7917 5748
              </p>
            </div>
          </a>

          {/* Discord */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("noahfinch");
              // Add toast/notification here if desired
            }}
            class="group flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-blurple hover:shadow-[0_0_15px_#9D00FF] transition-all duration-300"
          >
            <div class="p-3 bg-gray-800 rounded-lg group-hover:bg-blurple group-hover:bg-opacity-20 transition-colors">
              <DiscordSVG />
            </div>
            <div class="flex-1">
              <h3 class="text-gray-400 font-pixel text-sm group-hover:text-blurple transition-colors">
                Discord
              </h3>
              <p class="text-white group-hover:text-blurple transition-colors">
                noahfinch
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/symful"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-white hover:shadow-[0_0_15px_#FFFFFF] transition-all duration-300"
          >
            <div class="p-3 bg-gray-800 rounded-lg group-hover:bg-white group-hover:bg-opacity-20 transition-colors">
              <GithubSVG />
            </div>
            <div class="flex-1">
              <h3 class="text-gray-400 font-pixel text-sm group-hover:text-white transition-colors">
                GitHub
              </h3>
              <p class="text-white group-hover:text-white transition-colors">
                symful
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:kemalardian17@gmail.com"
            class="group flex items-center gap-4 p-4 border border-gray-800 rounded-lg hover:border-hotPink hover:shadow-[0_0_15px_#FF00F5] transition-all duration-300"
          >
            <div class="p-3 bg-gray-800 rounded-lg group-hover:bg-hotPink group-hover:bg-opacity-20 transition-colors">
              <EmailSVG />
            </div>
            <div class="flex-1">
              <h3 class="text-gray-400 font-pixel group-hover:text-hotPink transition-colors">
                Email
              </h3>
              <p class="text-white text-xs md:text-base group-hover:text-hotPink transition-colors">
                kemalardian17@gmail.com
              </p>
            </div>
          </a>
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
