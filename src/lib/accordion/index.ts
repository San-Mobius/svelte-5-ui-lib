import Accordion from "./Accordion.svelte";
import AccordionItem from "./AccordionItem.svelte";
import { type Writable } from "svelte/store";
import type { Snippet } from "svelte";
import type { HTMXAttributes, ParamsType, TransitionFunc } from "../types";
import { accordion, accordionitem } from "./theme";

interface AccordionCtxType {
  flush: boolean;
  activeClass: string | undefined | null;
  inactiveClass: string | undefined | null;
  selected?: Writable<object>;
  classActive?: string;
  classInactive?: string;
  isSingle?: boolean;
}

interface AccordionProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  flush?: boolean;
  isSingle?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  defaultClass?: string;
  classActive?: string;
  classInactive?: string;
}

interface AccordionItemProps extends HTMXAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  open?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  transition?: TransitionFunc;
  params?: ParamsType;
  class?: string;
}

export { AccordionItem, accordionitem, type AccordionItemProps, Accordion, accordion, type AccordionCtxType, type AccordionProps };
