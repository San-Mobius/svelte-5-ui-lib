import type { Snippet } from "svelte";
import type { HTMXAttributes, TransitionFunc } from "../types";
import Banner from "./Banner.svelte";
import { banner } from "./theme";

type ColorVariants = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
type TypeVariants = "default" | "bottom" | "cta" | "signup" | "info";
type PositionVariants = "static" | "fixed" | "absolute" | "relative" | "sticky";

interface BannerProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  bannerStatus?: boolean;
  position?: PositionVariants;
  dismissable?: boolean;
  color?: ColorVariants;
  bannerType?: TypeVariants;
  divClass?: string;
  innerClass?: string;
  transition?: TransitionFunc;
  params?: object;
}

export { Banner, banner, type BannerProps };
