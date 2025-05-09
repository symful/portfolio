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
  const previewConfig = {
    title: "Kemal Ardian - Your All-Stack Programmer",
    description:
      "Full-stack developer specializing in Flutter, Deno, Next.js, and modern web technologies",
    image: null,
    url: "https://kemal.deno.dev/",
    twitterHandle: null,
  };
  const Element = routeList[route];
  const pageTitle = route === "Home" ? "Your All-Stack Programmer" : route;
  const pageDescription = route === "Home"
    ? previewConfig.description
    : `${previewConfig.description} - ${route} page`;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kemal Ardian | {pageTitle}</title>
        <meta name="title" content={`Kemal Ardian | ${pageTitle}`} />
        <meta name="description" content={pageDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={previewConfig.url} />
        <meta property="og:title" content={`Kemal Ardian | ${pageTitle}`} />
        <meta property="og:description" content={pageDescription} />
        {previewConfig.image && (
          <meta property="og:image" content={previewConfig.image} />
        )}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={previewConfig.url} />
        <meta
          property="twitter:title"
          content={`Kemal Ardian | ${pageTitle}`}
        />
        <meta property="twitter:description" content={pageDescription} />
        {previewConfig.image && (
          <meta property="twitter:image" content={previewConfig.image} />
        )}
        {previewConfig.twitterHandle && (
          <meta
            property="twitter:creator"
            content={previewConfig.twitterHandle}
          />
        )}

        {/* Favicons */}
        <link rel="icon" type="image/png" href="https://favi.deno.dev/🖥️.png" />
        <link rel="apple-touch-icon" href="https://favi.deno.dev/🖥️.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Header active={route} />

      <Element />

      <div class="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] opacity-20">
        <BinaryRain />
      </div>
    </>
  );
}
