// Vercel catch-all for /api/*. The bundled handler is created beside this file during the Vercel build.
import handle from "./handler.js";

export const maxDuration = 60;
export const runtime = "nodejs";

export default handle;
export const GET = handle;
export const HEAD = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const OPTIONS = handle;
