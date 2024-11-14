import type { Snippet } from "svelte";
import Kbd from "./Kbd.svelte";
import { kbd } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface KbdProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
  class: string | undefined | null;
}

export { Kbd, kbd, type KbdProps };
