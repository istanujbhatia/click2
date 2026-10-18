import { rmSync } from "node:fs";
import { build } from "esbuild";

rmSync("api/handler.js", { force: true });
await build({
  entryPoints: ["api/handler-source.js"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "api/handler.js",
});
