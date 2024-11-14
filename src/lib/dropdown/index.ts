import Dropdown from "./Dropdown.svelte";
import DropdownDivider from "./DropdownDivider.svelte";
import DropdownUl from "./DropdownUl.svelte";
import DropdownLi from "./DropdownLi.svelte";
import DropdownHeader from "./DropdownHeader.svelte";
import DropdownFooter from "./DropdownFooter.svelte";
import { dropdown, dropdowndivider, dropdownli, dropdownul, dropdownHeader, dropdownFooter } from "./theme";
import type { Snippet } from "svelte";
import type { HTMXAttributes, ParamsType, TransitionFunc } from "../types";
import type { HTMLAnchorAttributes } from "svelte/elements";

interface DropdownProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  dropdownStatus: boolean;
  closeDropdown?: () => void;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  ulClass?: string;
  backdropClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
}

interface DropdownDividerProps extends HTMXAttributes<HTMLDivElement> {
  class?: string;
}

interface DropdownHeaderProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownFooterProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string;
  href?: string;
  activeClass?: string;
  liClass?: string;
}

interface DropdownUlProps extends HTMXAttributes<HTMLUListElement> {
  children: Snippet;
}

export { Dropdown, DropdownDivider, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, dropdown, dropdowndivider, dropdownli, dropdownul, dropdownHeader, dropdownFooter, type DropdownProps, type DropdownDividerProps, type DropdownLiProps, type DropdownUlProps, type DropdownHeaderProps, type DropdownFooterProps };
