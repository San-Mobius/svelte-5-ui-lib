import Progressbar from "./Progressbar.svelte";
import type { EasingFunction } from "svelte/transition";
import { progressbar } from "./theme";
import { HTMXAttributes } from "$lib/types";

type ColorType = "primary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

interface ProgressbarProps extends HTMXAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  labelInside?: boolean;
  labelOutside?: string;
  easing?: EasingFunction;
  color?: ColorType;
  div2Class?: string;
  oustsideSpanClass?: string;
  oustsideProgressClass?: string;
  labeloutsidedivClass?: string;
  divClass?: string;
}

export { Progressbar, progressbar, type ProgressbarProps };
