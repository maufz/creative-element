import { GlobalAttributes } from './global';

export interface ButtonAttributes extends GlobalAttributes {
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

export interface InputAttributes extends GlobalAttributes {
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

export interface SelectAttributes extends GlobalAttributes {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}

export interface OptionAttributes extends GlobalAttributes {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}

export interface OptGroupAttributes extends GlobalAttributes {
  disabled?: boolean;
  label?: string;
}

export interface TextareaAttributes extends GlobalAttributes {
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

export interface FormAttributes extends GlobalAttributes {
  acceptcharset?: string;
  action?: string;
  autocomplete?: 'on' | 'off';
  enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  method?: 'post' | 'get' | 'dialog';
  name?: string;
  novalidate?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
}

export interface LabelAttributes extends GlobalAttributes {
  for?: string;
}
