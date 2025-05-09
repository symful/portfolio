export default function ClientNavLink({ href, children, class: className }: {
  href: string;
  children: preact.ComponentChildren;
  class?: string;
}) {
  return (
    <a href={href} class={className}>
      {children}
    </a>
  );
}
