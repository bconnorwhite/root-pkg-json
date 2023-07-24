import path from "node:path";
import { locatePath } from "locate-path";

export type Options = {
  /**
   * @default process.cwd()
   */
  readonly cwd?: string;
};

function getAncestors(dir: string): string[] {
  const parsed = path.parse(dir);
  const ancestors: string[] = [];
  if(parsed.root === dir) {
    return ancestors;
  } else {
    return getAncestors(parsed.dir).concat(parsed.dir);
  }
}

function getSelfAndAncestors(self: string) {
  const ancestors = getAncestors(self);
  return ancestors.concat(self);
}

/**
 * Returns the first package.json found in the current directory or any of its ancestors.
 */
export async function rootPkgJSON(options: Options = {}) {
  const cwd = options.cwd ?? process.cwd();
  const directories = getSelfAndAncestors(cwd);
  const pkgJSONs = directories.map((dir) => path.join(dir, "package.json"));
  return locatePath(pkgJSONs, {
    type: "file",
    preserveOrder: true
  });
}
