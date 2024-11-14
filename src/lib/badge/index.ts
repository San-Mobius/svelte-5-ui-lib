import type { Snippet } from "svelte";
import type { HTMXAttributes, ParamsType, TransitionFunc } from "../types";
import type { HTMLAnchorAttributes } from "svelte/elements";
import Badge from "./Badge.svelte";
import { badge } from "./theme";

type badgeColor = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

interface BadgeProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  badgeStatus?: boolean;
  color?: badgeColor;
  large?: boolean;
  dismissable?: boolean;
  border?: boolean;
  href?: HTMLAnchorAttributes["href"];
  target?: HTMLAnchorAttributes["target"];
  rounded?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
  aClass?: string;
}

export { Badge, badge, type BadgeProps, type badgeColor };
