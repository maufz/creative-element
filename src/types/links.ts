import { GlobalAttributes } from "./global";

interface CommonLinkAttributes {
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

export interface AnchorAttributes extends GlobalAttributes, CommonLinkAttributes {
  download?: string;
  type?: string;
}


export interface AreaAttributes extends GlobalAttributes, CommonLinkAttributes {
  alt?: string;
  coords?: string;
  download?: string;
  shape?: "rect" | "circle" | "poly" | "default";
  type?: string;
}

export interface LinkAttributes extends GlobalAttributes {
  as?: string;
  crossorigin?: string;
  disabled?: boolean;
  href?: string;
  hreflang?: string;
  imagesizes?: string;
  imagesrcset?: string;
  integrity?: string;
  media?: string;
  referrerpolicy?: string;
  rel?: string;
  sizes?: string;
  type?: string;
}

