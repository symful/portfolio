import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-4">
        <h1 class="text-electric text-6xl md:text-8xl font-pixel mb-4">404</h1>
        <p class="text-white text-xl md:text-2xl font-pixel mb-8">
          Page not found
        </p>
        <a
          href="/"
          class="px-6 py-3 bg-electric text-black font-pixel rounded hover:transform hover:scale-105 transition-transform"
        >
          Return Home
        </a>
        <div class="mt-12 text-gray-500 font-mono text-sm">
          // The page you're looking for has been moved or doesn't exist //
        </div>
      </div>
    </>
  );
}
