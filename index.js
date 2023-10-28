#!/usr/bin/env node

import { unrar } from "unrar-promise";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile } from "fs/promises";
import { resolve, basename, extname } from "path";

// esm 下 node.js 无法 require1 JSON 文件
// import.meta.url： esm.env 当前模块文件 url 地址
const pkg = JSON.parse(
  await readFile(
    new URL(
      "./package.json",
      import.meta.url
    ) /*以当前模块 url 地址为基础路径，结合 package.json 文件构建其绝对路径*/
  )
);

const { argv } = yargs(hideBin(process.argv))
  .scriptName("unrar")
  .usage("$0 <input> [options]", "unrar input file")
  .demandCommand(1, "You must provide an input file")
  .options({
    output: {
      alias: "o",
      describe: "Output directory",
      type: "string",
    },
  })
  .options({
    password: {
      alias: "r",
      describe: "Password",
      type: "string",
    },
  })
  .options({
    overwrite: {
      alias: "r",
      describe: "Overwrite existing files",
      type: "boolean",
      default: true,
    },
  })
  .help("help")
  .alias("v", "version")
  .alias("h", "help")
  .version(pkg.version);

let { input, output, overwrite, password = "" } = argv;
output = resolve(process.cwd(), output || basename(input, extname(input)));
console.log(`unrar ${input} to ${output}`);

await unrar(input, output, {
  password,
  overwrite,
});

console.log("unrar done");
