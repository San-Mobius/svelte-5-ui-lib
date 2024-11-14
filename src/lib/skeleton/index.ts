import CardPlaceholder from "./CardPlaceholder.svelte";
import ImagePlaceholder from "./ImagePlaceholder.svelte";
import ListPlaceholder from "./ListPlaceholder.svelte";
import Skeleton from "./Skeleton.svelte";
import TestimonialPlaceholder from "./TestimonialPlaceholder.svelte";
import TextPlaceholder from "./TextPlaceholder.svelte";
import VideoPlaceholder from "./VideoPlaceholder.svelte";
import WidgetPlaceholder from "./WidgetPlaceholder.svelte";
import { cardPlaceholder, imagePlaceholder, listPlaceholder, skeleton, testimonialPlaceholder, textPlaceholder, videoPlaceholder, widgetPlaceholder } from "./theme";
import { HTMXAttributes } from "$lib/types";

type CardSizeType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
interface CardPlaceholderProps extends HTMXAttributes<HTMLDivElement> {
  size?: CardSizeType;
  class?: string;
}

type SizeImageType = "sm" | "md" | "lg" | undefined;
type RoundedType = "sm" | "md" | "lg" | "none" | "full" | undefined;

interface ImagePlaceholderProps extends HTMXAttributes<HTMLDivElement> {
  size?: SizeImageType;
  rounded?: RoundedType;
  class?: string;
}

type SizeListType = "sm" | "md" | "lg" | undefined;
type RoundedListType = "sm" | "md" | "lg" | "none" | "full" | undefined;

interface ListPlaceholderProps extends HTMXAttributes<HTMLDivElement> {
  itemNumber?: number;
  size?: SizeListType;
  rounded?: RoundedListType;
  class?: string;
}

type SizeSkeletonType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;

interface SkeletonProps extends HTMXAttributes<HTMLDivElement> {
  size?: SizeSkeletonType;
  class?: string;
}

type SizeTextType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;

interface TextPlaceholderProps extends HTMXAttributes<HTMLDivElement> {
  size?: SizeTextType;
}

type SizeVideoType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;

interface VideoPlaceholderProps extends HTMXAttributes<HTMLDivElement> {
  size?: SizeVideoType;
}

export { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder, cardPlaceholder, imagePlaceholder, listPlaceholder, skeleton, testimonialPlaceholder, textPlaceholder, videoPlaceholder, widgetPlaceholder, type CardPlaceholderProps, type ImagePlaceholderProps, type ListPlaceholderProps, type SkeletonProps, type TextPlaceholderProps, type VideoPlaceholderProps, type SizeVideoType };
