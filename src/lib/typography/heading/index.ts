import Heading from "./Heading.svelte";
import type { Snippet } from "svelte";
import { heading } from "./theme";
import { HTMXAttributes } from "$lib/types";

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;

interface HeadingProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
  tag?: TagType;
  class?: string;
}

export { Heading, heading, type HeadingProps };
