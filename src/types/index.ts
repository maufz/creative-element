import type { GlobalAttributes } from "./global";
import type {
  ButtonAttributes,
  FieldsetAttributes,
  FormAttributes,
  InputAttributes,
  LabelAttributes,
  OptGroupAttributes,
  OptionAttributes,
  SelectAttributes,
  TextareaAttributes,
} from "./forms";
import {
  AudioAttributes,
  CanvasAttributes,
  EmbedAttributes,
  IframeAttributes,
  ImgAttributes,
  MapAttributes,
  VideoAttributes,
} from "./media";
import {
  AnchorAttributes,
  BlockquoteAttributes,
  DelInsAttributes,
  DetailsAttributes,
  DialogAttributes,
} from "./text";
import { ColAttributes, TableCellAttributes, TableHeadingAttributes } from "./table";

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

interface DataAttributes extends GlobalAttributes {
  value?: string;
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
  type?: string;
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
  video: VideoAttributes;
  td: TableCellAttributes;
  th: TableHeadingAttributes;
};
