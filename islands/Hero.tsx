import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { SetRoute } from "./Template.tsx";

const TEXTS = [
  "Flutter",
  "Next.JS",
  "Deno",
  "Node.JS",
  "Bun",
  "TypeScript",
  "SQL",
  "MongoDB",
];

export default function Hero({ setRoute }: { setRoute: SetRoute }) {
  const currentText = useSignal("");
  const currentIndex = useSignal(0);
  const isDeleting = useSignal(false);

  useEffect(() => {
    const typeEffect = setInterval(() => {
      const fullText = TEXTS[currentIndex.value];

      if (isDeleting.value) {
        currentText.value = fullText.substring(0, currentText.value.length - 1);
      } else {
        currentText.value = fullText.substring(0, currentText.value.length + 1);
      }

      if (!isDeleting.value && currentText.value === fullText) {
        setTimeout(() => isDeleting.value = true, 1000);
      } else if (isDeleting.value && currentText.value === "") {
        isDeleting.value = false;
        currentIndex.value = (currentIndex.value + 1) % TEXTS.length;
      }
    }, 100);

    return () => clearInterval(typeEffect);
  }, []);

  return (
    <section class="min-h-[80vh] flex flex-col justify-center px-4 md:px-8">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-white text-4xl md:text-6xl font-pixel mb-4">
          <span class="text-electric">Your</span> All-Stack Programmer
        </h2>

        <div class="flex items-baseline gap-2 mb-8">
          <div class="w-3 h-3 rounded-full bg-electric animate-pulse flex-shrink-0 mt-1">
          </div>
          <p class="text-white font-mono leading-tight">
            I work with <span class="text-electric">{currentText}</span>
            <span class="animate-blink">|</span>
          </p>
        </div>

        <div class="flex gap-4">
          <a
            class="px-6 py-3 bg-electric text-black font-pixel rounded hover:(transform scale-105)"
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              setRoute("Projects");
            }}
          >
            View Projects
          </a>
          <a
            class="px-6 py-3 border-2 border-electric text-white font-pixel rounded hover:(bg-electric bg-opacity-20)"
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              setRoute("Contact");
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
