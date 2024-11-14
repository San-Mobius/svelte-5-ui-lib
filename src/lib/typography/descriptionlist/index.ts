import DescriptionList from "./DescriptionList.svelte";
import type { Snippet } from "svelte";
import { descriptionList } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface DescriptionListProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
  tag: "dt" | "dd";
}

export { DescriptionList, descriptionList, type DescriptionListProps };
