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
  data?: {
    [key: string]: string;
  };
  aria?: {
    [key: string]: string | boolean;
  }
  [key: string]: any; // Allow any arbitrary attribute
}