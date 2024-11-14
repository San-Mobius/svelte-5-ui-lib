import type { Snippet } from "svelte";
import type { HTMLLiAttributes } from "svelte/elements";
import Breadcrumb from "./Breadcrumb.svelte";
import BreadcrumbItem from "./BreadcrumbItem.svelte";
import { breadcrumb } from "./theme";
import { HTMXAttributes } from "$lib/types";

interface BreadcrumbProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  navClass?: string;
  olClass?: string;
  ariaLabel?: string;
  class?: string;
}

interface BreadcrumbItemProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string;
  linkClass?: string;
  spanClass?: string;
  homeClass?: string;
  class?: string;
}

export { Breadcrumb, BreadcrumbItem, breadcrumb, type BreadcrumbProps, type BreadcrumbItemProps };
