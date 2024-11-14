import Mark from "./Mark.svelte";
import type { Snippet } from "svelte";
import { mark } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface MarkProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
  markClass?: string;
  class?: string;
}

export { Mark, mark, type MarkProps };
