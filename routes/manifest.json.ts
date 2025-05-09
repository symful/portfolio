import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    const manifest = {
      "icons": [{
        "src": "https://favi.deno.dev/🖥️.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable",
      }],
    };

    return new Response(JSON.stringify(manifest), {
      headers: {
        "Content-Type": "application/manifest+json",
      },
    });
  },
};
