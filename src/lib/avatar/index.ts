import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import Avatar from "./Avatar.svelte";
import { avatar } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface AvatarProps extends HTMXAttributes<HTMLDivElement> {
  children?: Snippet;
  href?: HTMLAnchorAttributes["href"];
  target?: HTMLAnchorAttributes["target"];
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
