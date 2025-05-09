import { Head } from "$fresh/runtime.ts";
import BinaryRain from "./BinaryRain.tsx";
import Header from "./Header.tsx";
import Hero from "./Hero.tsx";
import SkillsMatrix from "./SkillsMatrix.tsx";
import ContactInformation from "./ContactInformation.tsx";
import ProjectList from "../components/ProjectList.tsx";
import { useRef, useState } from "preact/hooks";

export const routeList = {
  "Home": {
    Component: Hero,
    href: "/",
  },
  "Skills": {
    Component: SkillsMatrix,
    href: "/skills",
  },
  "Contact": {
    Component: ContactInformation,
    href: "/contact",
  },
  "Projects": {
    Component: ProjectList,
    href: "/projects",
  },
};

const previewConfig = {
  title: "Kemal Ardian - Your All-Stack Programmer",
  description:
    "Full-stack developer specializing in Flutter, Deno, Next.js, and modern web technologies",
  image: null,
  url: "https://kemal.deno.dev/",
  twitterHandle: null,
  color: "#000000",
};

export type SetRoute = (route: keyof typeof routeList) => void;

export default function Template(
  { route }: { route: keyof typeof routeList },
) {
  const [currentRoute, setCurrentRoute] = useState<keyof typeof routeList>(
    route,
  );
  const [transitionStage, setTransitionStage] = useState("enter");
  const [displayRoute, setDisplayRoute] = useState(route);
  const { Component } = routeList[displayRoute];
  const componentRef = useRef<HTMLDivElement>(null);

  const pageDescription = displayRoute === "Home"
    ? previewConfig.description
    : `${previewConfig.description} - ${displayRoute} page`;
  const pageTitle = displayRoute === "Home"
    ? "Your All-Stack Programmer"
    : displayRoute;

  const handleRouteChange = (routeName: keyof typeof routeList) => {
    setTransitionStage("exit");
    setTimeout(() => {
      setDisplayRoute(routeName);
      setTransitionStage("enter");
      setCurrentRoute(routeName);
    }, 1000);
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kemal Ardian | {pageTitle}</title>
        <meta name="title" content={`Kemal Ardian | ${pageTitle}`} />
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="theme-color"
          data-react-helmet="true"
          content={previewConfig.color}
        />

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

      <BinaryRain key="binary-rain" />

      <Header
        active={currentRoute}
        setRoute={handleRouteChange}
      />

      <div
        ref={componentRef}
        class={`transition-opacity duration-[1s] ${
          transitionStage === "enter" ? "opacity-100" : "opacity-0"
        }`}
      >
        <Component setRoute={handleRouteChange} />
      </div>
    </>
  );
}
