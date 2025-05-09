import { Head } from "$fresh/runtime.ts";
import BinaryRain from "../components/BinaryRain.tsx";
import Header from "../components/Header.tsx";
import Hero from "../islands/Hero.tsx";
import SkillsMatrix from "../islands/SkillsMatrix.tsx";
import ContactInformation from "../islands/ContactInformation.tsx";
import ProjectList from "../islands/ProjectList.tsx";

export const routeList = {
  "Home": Hero,
  "Skills": SkillsMatrix,
  "Contact": ContactInformation,
  "Projects": ProjectList,
};

export default function Template(
  { route }: { route: keyof typeof routeList },
) {
  const Element = routeList[route];

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="https://favi.deno.dev/🖥️.png" />
        <link rel="apple-touch-icon" href="https://favi.deno.dev/🖥️.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>
          Kemal Ardian | {route == "Home" ? "Your All-Stack Programmer" : route}
        </title>
      </Head>

      <Header active={route} />

      <Element />

      <div class="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] opacity-20">
        <BinaryRain />
      </div>
    </>
  );
}
