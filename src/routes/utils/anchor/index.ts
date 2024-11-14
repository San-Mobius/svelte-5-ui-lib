import Anchor from "./Anchor.svelte";
import type { Snippet } from "svelte";
import { anchor } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface AnchorProps extends HTMXAttributes<HTMLHeadingElement> {
  children: Snippet;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  spanClass?: string;
  aClass?: string;
}

export { Anchor, anchor, type AnchorProps };
