import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import Avatar from "./Avatar.svelte";
import { avatar } from "./theme";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  href?: string;
  src?: string;
  cornerStyle?: "rounded" | "circular";
  stacked?: boolean;
  dot?: object | undefined;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onclick?: () => void;
  border?: boolean;
}

export { Avatar, avatar, type AvatarProps };
