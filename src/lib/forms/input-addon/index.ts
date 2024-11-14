import type { Snippet } from "svelte";
import InputAddon from "./InputAddon.svelte";
import { HTMXAttributes } from "$lib/types";
interface InputAddonProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  class?: string;
  size?: "sm" | "md" | "lg" | undefined;
}

export { InputAddon, type InputAddonProps };
