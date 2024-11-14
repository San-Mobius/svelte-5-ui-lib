import Navbar from "./Navbar.svelte";
import NavBrand from "./NavBrand.svelte";
import NavLi from "./NavLi.svelte";
import NavUl from "./NavUl.svelte";
import NavHamburger from "./NavHamburger.svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { Snippet } from "svelte";
import type { HTMXAttributes, navbarType } from "$lib/types";
import { navbar, navUl, navbrand, navLi, navhamburger } from "./theme";

interface NavbarProps extends HTMXAttributes<HTMLElement> {
  children: Snippet;
  navSlotBlock?: Snippet;
  navSlotHiddenTop?: Snippet;
  navSlotHiddenBottom?: Snippet;
  toggleNav?: () => void;
  closeNav?: () => void;
  navStatus?: boolean | undefined;
  fluid?: boolean;
  brand?: Snippet;
  hamburgerMenu?: boolean;
  breakPoint?: navbarType["breakPoint"];
  navClass?: string;
  divClass?: string;
  btnClass?: string;
  div2Class?: string;
  nonActiveClass?: string;
  activeClass?: string;
}

interface NavBrandProps extends HTMLAnchorAttributes {
  children?: Snippet;
  siteName?: string | undefined | null;
  closeNav?: () => void;
  aClass?: string;
  spanClass?: string;
}

interface NavUlProps extends HTMXAttributes<HTMLUListElement> {
  children: Snippet;
  class?: string;
}

interface NavLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  closeNav?: () => void;
  href?: string;
  aClass?: string;
  class?: string;
}

interface NavHamburgerProps extends HTMXAttributes<HTMLButtonElement> {
  toggleNav: () => void;
}

export { Navbar, navbar, type NavbarProps, NavBrand, navbrand, type NavBrandProps, NavLi, navLi, type NavLiProps, NavUl, navUl, type NavUlProps, NavHamburger, navhamburger, type NavHamburgerProps };
