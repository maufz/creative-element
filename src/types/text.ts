import type { GlobalAttributes } from "./global";

export interface AnchorAttributes extends GlobalAttributes {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  type?: string;
}

export interface BlockquoteAttributes extends GlobalAttributes {
  cite?: string;
}

export interface DelInsAttributes extends GlobalAttributes {
  cite?: string;
  datetime?: string;
}

export interface DetailsAttributes extends GlobalAttributes {
  open?: boolean;
  name?: string;
}

export interface DialogAttributes extends GlobalAttributes {
  open?: boolean;
}
