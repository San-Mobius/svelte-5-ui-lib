import type { ColorName, FormSizeType } from "$lib/types";
import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

export type InputValue = string | number | string[] | undefined;
export interface InputProps<T extends InputValue = string> extends Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  children?: Snippet<[{ class: string } & Omit<InputProps<T>, "children" | "left" | "right" | "size">]>;
  left?: Snippet;
  right?: Snippet;
  size?: FormSizeType;
  value?: any;
  clearable?: boolean;
  color?: ColorName | "default" | "tinted";
  classLeft?: string;
  classRight?: string;
  class?: string;
  containerClass?: string;
  label:string;
  liClass?:string;
  iconClass?: string;
  iconSnippet: Snippet;
  options: Array<Snippet>
}
