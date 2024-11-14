import type { Snippet } from "svelte";
import Alert from "./Alert.svelte";
import type { HTMXAttributes, ParamsType, TransitionFunc } from "../types";
import { alert } from "./theme";

type alertColor = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

interface AlertProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  alertStatus?: boolean;
  closeIcon?: boolean;
  color?: alertColor;
  border?: boolean;
  rounded?: boolean;
  dismissable?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
}

export { type alertColor, type AlertProps, Alert, alert };
