import Toast from "./Toast.svelte";
import { toast } from "./theme";
import type { Snippet } from "svelte";
import type { HTMXAttributes, ParamsType, TransitionFunc } from "../types";

type ColorType = "primary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "sky" | "violet" | "fuchsia" | "rose" | undefined;
type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;

interface ToastProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  toastStatus?: boolean;
  dismissable?: boolean;
  color?: ColorType;
  position?: PositionType;
  baseClass?: string;
  iconClass?: string;
  contentClass?: string;
  align?: boolean;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { Toast, toast, type ToastProps };
