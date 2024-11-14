import Hr from "./Hr.svelte";
import type { Snippet } from "svelte";
import { hr } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface HrProps extends HTMXAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string;
  hrClass?: string;
  iconDivClass?: string;
  textSpanClass?: string;
  innerDivClass?: string;
}

export { Hr, hr, type HrProps };
