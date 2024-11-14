import Secondary from "./Secondary.svelte";
import type { Snippet } from "svelte";
import { secondary } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface SecondaryProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
  secondaryClass?: string;
  class?: string;
}

export { Secondary, secondary, type SecondaryProps };
