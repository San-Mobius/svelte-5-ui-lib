import type { Snippet } from "svelte";
import type { Placement, Strategy } from "@floating-ui/dom";
import Tooltip from "./Tooltip.svelte";
import { tooltip } from "./theme";
import { HTMXAttributes } from "$lib/types";

type TooltipColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "default" | undefined;

interface TooltipProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  triggeredBy?: string;
  reference?: string;
  showOn?: "hover" | "click";
  position?: Placement;
  color?: TooltipColorType;
  arrow?: boolean;
  offset?: number;
  strategy?: Strategy;
  visible?: boolean;
}

export { Tooltip, tooltip, type TooltipProps };
