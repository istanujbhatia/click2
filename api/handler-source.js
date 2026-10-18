import { vercelFetch } from "../dist/vercel.js";

export const maxDuration = 60;
export const runtime = "nodejs";

// Vercel treats a default function export as its legacy Node handler, whose
// `request.url` is only a relative path. Click uses the Fetch API end-to-end,
// so expose the Web Handler shape explicitly and receive a standard Request.
export default {
  fetch(request) {
    return vercelFetch(request);
  },
};
