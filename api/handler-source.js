import { vercelFetch } from "../dist/vercel.js";

export const maxDuration = 60;
export const runtime = "nodejs";

function handle(request) {
  return vercelFetch(request);
}

export default handle;
export const GET = handle;
export const HEAD = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const OPTIONS = handle;
