import { default as less } from "https://deno.land/x/aleph@v0.2.18/vendor/less/less.js";
import { resolve } from "https://deno.land/std@0.133.0/path/mod.ts";
import { parse } from "https://deno.land/std@0.133.0/flags/mod.ts";

const { atom: atomDirPath } = parse(Deno.args);
const path = resolve(atomDirPath, "./styles/icons.less");

const { css } = await less.render(await Deno.readTextFile(path));
const ruleset = await less.parse(css);

for (const rule of ruleset.rules) {
  if (!rule || "Comment" === rule.type) {
    continue;
  }

  console.dir(rule);
}
