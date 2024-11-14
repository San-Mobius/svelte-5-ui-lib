import Layout from "./Layout.svelte";
import type { Snippet } from "svelte";
import { layout } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface LayoutProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
}

export { Layout, layout, type LayoutProps };
