import type { GlobalAttributes } from "./global";

export interface DataAttributes extends GlobalAttributes {
  value?: string;
}

export interface ScriptAttributes extends GlobalAttributes {
  async?: boolean;
  crossorigin?: string;
  defer?: boolean;
  integrity?: string;
  nomodule?: boolean;
  referrerpolicy?: string;
  src?: string;
  type?: string;
}

export interface StyleAttributes extends GlobalAttributes {
  media?: string;
  nonce?: string;
  title?: string;
  type?: string;
}
