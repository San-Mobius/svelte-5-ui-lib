import Select from "./Select.svelte";
import type { Snippet } from "svelte";
import type { HTMLSelectAttributes } from "svelte/elements";
import { select } from "./theme";
import { HTMXAttributes } from "$lib/types";

type SelectSize = "sm" | "md" | "lg";

type SelectOptionType<T> = {
  name: string | number;
  value: T;
};

interface SelectProps<T> extends Omit<HTMLSelectAttributes, "size"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  underline?: boolean;
  size?: SelectSize;
  placeholder?: string;
}

interface MultiSelectProps<T> extends HTMXAttributes<HTMLDivElement> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  value?: T[];
  size?: SelectSize;
  dropdownClass?: string;
  placeholder?: string;
  change?: (event: Event) => void;
}

export { Select, select, type SelectProps, type SelectOptionType, type MultiSelectProps, type SelectSize };
