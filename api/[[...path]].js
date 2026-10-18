// Vercel catch-all for /api/*. The bundled handler is created beside this file during the Vercel build.
import handle from "./handler.js";

export const maxDuration = 60;
export const runtime = "nodejs";

// `handle` is a Web Handler (`{ fetch(request) }`). Re-exporting that object
// keeps this catch-all route on Vercel's Fetch API, where request.url is
// absolute. A default function export invokes Vercel's legacy Node adapter
// instead and leaves the URL relative (which breaks URL parsing).
export default handle;
