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
  BlockquoteAttributes,
  DelInsAttributes,
  DetailsAttributes,
  DialogAttributes,
} from "./text";
import { ColAttributes, TableCellAttributes, TableHeadingAttributes } from "./table";
import { AnchorAttributes, AreaAttributes, LinkAttributes } from "./links";
import { DataAttributes, ScriptAttributes, StyleAttributes } from "./misc";

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
  form: FormAttributes;
  iframe: IframeAttributes;
  img: ImgAttributes;
  input: InputAttributes;
  ins: DelInsAttributes;
  label: LabelAttributes;
  link: LinkAttributes;
  map: MapAttributes;
  optgroup: OptGroupAttributes;
  option: OptionAttributes;
  script: ScriptAttributes;
  select: SelectAttributes;
  style: StyleAttributes;
  td: TableCellAttributes;
  textarea: TextareaAttributes;
  th: TableHeadingAttributes;
  video: VideoAttributes;
};
