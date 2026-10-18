import { cpSync, rmSync } from "node:fs";
import { build } from "esbuild";

rmSync("api/_dist", { recursive: true, force: true });
cpSync("dist", "api/_dist", { recursive: true });
await build({
  entryPoints: ["api/handler-source.js"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "api/_dist/handler.js",
});
