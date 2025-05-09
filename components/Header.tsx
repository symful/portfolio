import ClientNavLink from "../islands/ClientNavLink.tsx";

interface HeaderProps {
  active?: string;
}

export default function Header({ active }: HeaderProps) {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  if (!active) {
    active = menuItems[0].name;
  }

  return (
    <header class="px-4 py-6 md:px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="text-electric text-3xl font-pixel font-bold">K</span>
          <a
            href="/"
            class="text-white font-pixel text-2xl md:text-3xl hover:text-electric transition-colors"
          >
            Kemal Ardian
          </a>
        </div>

        <nav class="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <ClientNavLink
              href={item.href}
              class={`relative px-4 py-2 font-pixel transition-all duration-300 group overflow-hidden ${
                active === item.name
                  ? "text-electric shadow-[0_0_10px_#00F5FF]"
                  : "text-white hover:text-electric"
              }`}
            >
              <span class="relative z-10">{item.name}</span>
              <span
                class={`absolute inset-0 bg-electric opacity-0 ${
                  active === item.name ? "opacity-10" : "group-hover:opacity-10"
                } transition-opacity duration-300 rounded-md blur-[2px]`}
              >
              </span>
              <span
                class={`absolute inset-0 border border-electric ${
                  active === item.name
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                } transition-opacity duration-300 rounded-md shadow-[0_0_10px_#00F5FF]`}
              >
              </span>
            </ClientNavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
