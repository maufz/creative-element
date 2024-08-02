export interface GlobalAttributes {
  accesskey?: string;
  anchor?: string;
  autocapitalize?: boolean;
  autofocus?: boolean;
  class?: string;
  className?: string;
  contenteditable?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  draggable?: boolean;
  enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  exportparts?: string;
  hidden?: boolean;
  id?: string;
  inert?: boolean;
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  is?: string;
  itemid?: string;
  itemprop?: string;
  itemref?: string;
  itemscope?: boolean;
  itemtype?: string;
  lang?: string;
  nonce?: string;
  part?: string;
  popover?: string;
  role?: string;
  slot?: string;
  spellcheck?: boolean;
  tabindex?: number;
  title?: string;
  translate?: boolean;
  virtualkeyboardpolicy?: 'auto' | 'manual';
  [key: string]: any;
  data?: {
    [key: string]: string;
  };
  aria?: {
    [key: string]: string | boolean;
  }
}

interface AnchorAttributes extends GlobalAttributes {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  type?: string;
}

interface AudioAttributes extends GlobalAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  src?: string;
}

interface BlockquoteAttributes extends GlobalAttributes {
  cite?: string;
}

interface ButtonAttributes extends GlobalAttributes {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  name?: string;
  type?: 'button' | 'reset' | 'submit';
  value?: string;
}

interface CanvasAttributes extends GlobalAttributes {
  height?: number;
  width?: number;
}

interface ImgAttributes extends GlobalAttributes {
  alt?: string;
  crossorigin?: string;
  decoding?: 'async' | 'sync' | 'auto';
  height?: number;
  ismap?: boolean;
  loading?: 'eager' | 'lazy';
  referrerpolicy?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  usemap?: string;
  width?: number;
}

interface InputAttributes extends GlobalAttributes {
  accept?: string;
  alt?: string;
  autocomplete?: string;
  autofocus?: boolean;
  checked?: boolean;
  dirname?: string;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  height?: number;
  list?: string;
  max?: number;
  maxlength?: number;
  min?: number;
  minlength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: number;
  src?: string;
  step?: number;
  type?: string;
  value?: string;
  width?: number;
}

interface SelectAttributes extends GlobalAttributes {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}

interface TextareaAttributes extends GlobalAttributes {
  autocapitalize?: boolean;
  autocomplete?: 'on' | 'off';
  autofocus?: boolean;
  cols?: number;
  dirname?: 'ltr' | 'rtl';
  disabled?: boolean;
  form?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  wrap?: 'hard' | 'soft';
}

interface FormAttributes extends GlobalAttributes {
  acceptcharset?: string;
  action?: string;
  autocomplete?: 'on' | 'off';
  enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  method?: 'post' | 'get' | 'dialog';
  name?: string;
  novalidate?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
}

interface LabelAttributes extends GlobalAttributes {
  for?: string;
}

export type ElementAttributesMap = {
  [key in keyof HTMLElementTagNameMap]: GlobalAttributes;
} & {
  a: AnchorAttributes;
  audio: AudioAttributes;
  blockquote: BlockquoteAttributes;
  button: ButtonAttributes;
  canvas: CanvasAttributes;
  img: ImgAttributes;
  input: InputAttributes;
  select: SelectAttributes;
  textarea: TextareaAttributes;
  form: FormAttributes;
  label: LabelAttributes;
};
