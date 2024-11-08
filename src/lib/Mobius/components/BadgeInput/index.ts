import type { badgeColor, BadgeProps } from "$lib/badge";
import type { TransitionFunc } from "$lib/types";
import type { Snippet } from "svelte";


export interface BadgesInputProps extends Props {
   placeholder ?: string,
   setField?:(n: string,v: string[]) => void,
   tagsContainerClassName ?: string,
   name : string,
   badgeProps ?: {
        color ?: badgeColor,
        icon  ?: Snippet,
        large ?: boolean,
        border?: boolean,
        rounded?: boolean,
        transition?: TransitionFunc,
   }
}