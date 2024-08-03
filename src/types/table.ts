import { GlobalAttributes } from "./global";

export interface ColAttributes extends GlobalAttributes {
  span?: number;
}

export interface TableCellAttributes extends GlobalAttributes {
  colspan?: number;
  rowspan?: number;
  headers?: string;
}

export interface TableHeadingAttributes extends TableCellAttributes {
  scope?: "row" | "col" | "rowgroup" | "colgroup";
}
