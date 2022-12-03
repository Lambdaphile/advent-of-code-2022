import fs from "fs";

export function parseFile(path) {
  return fs.readFileSync(path, "utf8").split("\n");
}
