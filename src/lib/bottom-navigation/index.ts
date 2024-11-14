import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import BottomNav from "./BottomNav.svelte";
import BottomNavItem from "./BottomNavItem.svelte";
import BottomNavHeaderItem from "./BottomNavHeaderItem.svelte";
import BottomNavHeader from "./BottomNavHeader.svelte";
import { bottomNav, bottomNavItem, bottomnavheader, bottomnavheaderitem } from "./theme";
import { HTMXAttributes } from "$lib/types";

type BottomNavVariantType = "border" | "application" | "group" | "default" | "pagination" | "card" | "meeting" | "video" | undefined;
type PositionType = "static" | "fixed" | "absolute" | "relative" | "sticky" | undefined;
type BottomNavContextType = {
  activeClass: string | undefined | null;
};

type AppBtnPositionType = "middle" | "left" | "right" | undefined;
interface BottomNavProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  activeUrl?: string;
  position?: PositionType;
  navType?: BottomNavVariantType;
  outerClass?: string;
  innerClass?: string;
  activeClass?: string;
}

interface BottomNavItemProps {
  children: Snippet;
  btnName?: string;
  appBtnPosition?: AppBtnPositionType;
  target?: string;
  activeClass?: string;
  href?: string;
  btnClass?: string;
  spanClass?: string;
}

interface BottomNavHeaderProps {
  children: Snippet;
  outerClass?: string;
  innerClass?: string;
}

interface BottomNavHeaderItemProps extends HTMLButtonAttributes {
  itemName: string;
  active?: boolean;
}

export { BottomNav, BottomNavItem, bottomNav, bottomNavItem, BottomNavHeader, bottomnavheader, BottomNavHeaderItem, bottomnavheaderitem, type BottomNavProps, type BottomNavItemProps, type BottomNavContextType, type BottomNavVariantType, type BottomNavHeaderProps, type BottomNavHeaderItemProps };
