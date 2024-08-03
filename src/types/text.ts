import type { GlobalAttributes } from "./global";

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
