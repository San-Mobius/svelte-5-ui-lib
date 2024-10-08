import Toast from "./Toast.svelte";
import { toast } from "./theme";
import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes } from "svelte/elements";
import { type VariantProps } from "tailwind-variants";

type ColorType = VariantProps<typeof toast>["color"];
type PositionType = VariantProps<typeof toast>["position"];

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
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
