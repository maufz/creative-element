import { GlobalAttributes } from "./global";

interface CommonMediaAttributes extends GlobalAttributes {
  src?: string;
}

interface CommonVisualMediaAttributes extends GlobalAttributes, CommonMediaAttributes {
  height?: number;
  width?: number;
}

export interface AudioAttributes extends GlobalAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  src?: string;
}

export interface ImgAttributes extends GlobalAttributes, CommonVisualMediaAttributes {
  alt?: string;
  crossorigin?: string;
  decoding?: "async" | "sync" | "auto";
  height?: number;
  ismap?: boolean;
  loading?: "eager" | "lazy";
  referrerpolicy?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  usemap?: string;
  width?: number;
}

export interface VideoAttributes extends GlobalAttributes, CommonVisualMediaAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
  poster?: string;
  preload?: "none" | "metadata" | "auto";
}

export interface MapAttributes extends GlobalAttributes {
  name?: string;
}

export interface IframeAttributes extends GlobalAttributes, CommonVisualMediaAttributes {
  allow?: string;
  allowfullscreen?: boolean;
  csp?: string;
  loading?: "eager" | "lazy";
  name?: string;
  referrerpolicy?: string;
  sandbox?: string;
  srcdoc?: string;
}

export interface EmbedAttributes extends GlobalAttributes, CommonVisualMediaAttributes {
  type?: string;
}

export interface CanvasAttributes extends GlobalAttributes {
  height?: number;
  width?: number;
}
