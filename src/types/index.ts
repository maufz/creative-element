import type { GlobalAttributes } from "./global";
import type {
  ButtonAttributes,
  FormAttributes,
  InputAttributes,
  LabelAttributes,
  OptGroupAttributes,
  OptionAttributes,
  SelectAttributes,
  TextareaAttributes,
} from "./forms";

interface AnchorAttributes extends GlobalAttributes {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  type?: string;
}

interface AreaAttributes extends GlobalAttributes {
  alt?: string;
  coords?: string;
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  shape?: "rect" | "circle" | "poly" | "default";
  target?: "_self" | "_blank" | "_parent" | "_top";
  type?: string;
}

interface AudioAttributes extends GlobalAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  src?: string;
}

interface BlockquoteAttributes extends GlobalAttributes {
  cite?: string;
}

interface CanvasAttributes extends GlobalAttributes {
  height?: number;
  width?: number;
}

interface ColAttributes extends GlobalAttributes {
  span?: number;
}

interface DataAttributes extends GlobalAttributes {
  value?: string;
}

interface DelInsAttributes extends GlobalAttributes {
  cite?: string;
  datetime?: string;
}

interface DetailsAttributes extends GlobalAttributes {
  open?: boolean;
  name?: string;
}

interface DialogAttributes extends GlobalAttributes {
  open?: boolean;
}

interface EmbedAttributes extends GlobalAttributes {
  height?: number;
  src?: string;
  type?: string;
  width?: number;
}

interface FieldsetAttributes extends GlobalAttributes {
  disabled?: boolean;
  form?: string;
  name?: string;
}

interface IframeAttributes extends GlobalAttributes {
  allow?: string;
  allowfullscreen?: boolean;
  csp?: string;
  height?: number;
  loading?: "eager" | "lazy";
  name?: string;
  referrerpolicy?: string;
  sandbox?: string;
  src?: string;
  srcdoc?: string;
  width?: number;
}

interface ImgAttributes extends GlobalAttributes {
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

interface LinkAttributes extends GlobalAttributes {
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
  title?: string;
  type?: string;
}

interface MapAttributes extends GlobalAttributes {
  name?: string;
}

export type ElementAttributesMap = {
  [key in keyof HTMLElementTagNameMap]: GlobalAttributes;
} & {
  a: AnchorAttributes;
  area: AreaAttributes;
  audio: AudioAttributes;
  blockquote: BlockquoteAttributes;
  button: ButtonAttributes;
  canvas: CanvasAttributes;
  col: ColAttributes;
  colgroup: ColAttributes;
  data: DataAttributes;
  del: DelInsAttributes;
  details: DetailsAttributes;
  dialog: DialogAttributes;
  embed: EmbedAttributes;
  fieldset: FieldsetAttributes;
  iframe: IframeAttributes;
  img: ImgAttributes;
  input: InputAttributes;
  ins: DelInsAttributes;
  label: LabelAttributes;
  link: LinkAttributes;
  map: MapAttributes;
  select: SelectAttributes;
  option: OptionAttributes;
  optgroup: OptGroupAttributes;
  textarea: TextareaAttributes;
  form: FormAttributes;
};
