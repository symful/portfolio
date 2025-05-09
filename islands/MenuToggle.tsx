import { useEffect, useRef } from "preact/hooks";

export default function MenuToggle() {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
        const nav = document.getElementById("mobile-nav");
        if (nav) {
          nav.classList.add("hidden");
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref]);

  return (
    <button
      class="md:hidden px-4 py-2 text-black font-pixel bg-electric rounded-md active:bg-opacity-80 select-none focus:outline-none"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        const nav = document.getElementById("mobile-nav");
        if (nav) {
          nav.classList.toggle("hidden");
        }
        setTimeout(() => (e.target as HTMLButtonElement).blur(), 100);
      }}
    >
      Menu
    </button>
  );
}
