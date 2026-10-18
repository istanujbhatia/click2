import { build } from "esbuild";

await build({
  entryPoints: ["api/handler-source.js"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "api/handler.js",
});
