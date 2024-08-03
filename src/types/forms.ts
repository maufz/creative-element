import { GlobalAttributes } from './global';

interface CommonFormFieldAttributes {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  name?: string;
  required?: boolean;
  value?: string;
}

export interface ButtonAttributes extends GlobalAttributes, CommonFormFieldAttributes {
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  type?: 'button' | 'reset' | 'submit';
}

export interface InputAttributes extends GlobalAttributes, CommonFormFieldAttributes {
  accept?: string;
  alt?: string;
  checked?: boolean;
  dirname?: string;
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
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  size?: number;
  src?: string;
  step?: number;
  type?: string;
  width?: number;
}

export interface SelectAttributes extends GlobalAttributes, CommonFormFieldAttributes {
  multiple?: boolean;
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

export interface TextareaAttributes extends GlobalAttributes, CommonFormFieldAttributes {
  autocapitalize?: boolean;
  autocomplete?: 'on' | 'off';
  cols?: number;
  dirname?: 'ltr' | 'rtl';
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  readonly?: boolean;
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

export interface FieldsetAttributes extends GlobalAttributes {
  disabled?: boolean;
  form?: string;
  name?: string;
}
