import Helper from "./Helper.svelte";
import { helper } from "./theme";
import type { Snippet } from "svelte";
import { HTMXAttributes, type ColorName } from "$lib/types";

interface HelperProps extends HTMXAttributes<HTMLParagraphElement> {
  children: Snippet;
  class?: string;
  color?: ColorName | "disabled";
}

export { Helper, helper, type HelperProps };
