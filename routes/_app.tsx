import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <>
      <Head>
        <title>Kemal Ardian - Your All-Stack Programmer</title>
        <link rel="stylesheet" href={asset("/styles/global.css")} />
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Component />
      </div>
    </>
  );
}
