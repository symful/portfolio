import { routeList, SetRoute } from "./Template.tsx";
import MenuToggle from "./MenuToggle.tsx";

export default function Header({ active, setRoute }: {
  active?: keyof typeof routeList;
  setRoute: SetRoute;
}) {
  if (!active) {
    active = Object.keys(routeList)[0] as keyof typeof routeList;
  }

  return (
    <header class="px-4 py-6 md:px-8 relative z-50">
      <div class="flex justify-between items-center max-w-7xl mx-auto">
        <div class="flex items-center gap-2">
          <span class="text-electric text-3xl font-pixel font-bold">K</span>
          <a
            href="/"
            class="text-white font-pixel text-2xl md:text-3xl hover:text-electric transition-colors"
          >
            Kemal Ardian
          </a>
        </div>

        <div class="relative">
          <MenuToggle />
          <nav
            id="mobile-nav"
            class="hidden md:flex gap-4 flex-col md:flex-row absolute right-0 md:static top-full mt-2 w-56 md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 z-50 rounded-lg border border-gray-800 md:border-none shadow-xl md:shadow-none"
          >
            {Object.entries(routeList).map(([name, item]) => (
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();

                  if (active == name) return;

                  window.history.pushState("", "", item.href);
                  setRoute(name as keyof typeof routeList);
                }}
                class={`relative block px-4 py-2 md:px-6 md:py-2 font-pixel transition-all duration-300 group overflow-hidden ${
                  active === name
                    ? "text-electric shadow-[0_0_10px_#00F5FF]"
                    : "text-white hover:text-electric"
                }`}
              >
                <span class="relative z-10">{name}</span>
                <span
                  class={`absolute inset-0 bg-electric opacity-0 ${
                    active === name ? "opacity-10" : "group-hover:opacity-10"
                  } transition-opacity duration-300 rounded-md blur-[2px]`}
                >
                </span>
                <span
                  class={`absolute inset-0 border border-electric ${
                    active === name
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-300 rounded-md shadow-[0_0_10px_#00F5FF]`}
                >
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
