import type { CSSProperties, ReactNode } from "react";

export interface IGridProps {
  /**
   * The alignment of grid items along the cross axis.
   */
  align?: CSSProperties["alignItems"];
  /**
   * The elements to be displayed within the grid container.
   */
  children: ReactNode;
  /**
   * Additional class names for customization.
   */
  className?: string;
  /**
   * The number of columns in the grid. Default is 12.
   *
   * @default 12
   */
  columns?: number;
  /**
   * The gap between grid items.
   */
  gap?: number | string;
  /**
   * The number of rows in the grid. Default is 1.
   *
   * @default 1
   */
  rows?: number;
  /**
   * Extra styles for the grid container.
   */
  style?: CSSProperties;
}

/**
 * Interface for defining props to customize a grid item component.
 *
 * @author Ariska Adi
 */
export interface IGridColProps {
  /**
   * The content to be displayed within the grid item.
   */
  children: ReactNode;
  /**
   * The end position of the grid item along the column axis.
   */
  colEnd?: number;
  /**
   * The start position of the grid item along the column axis.
   */
  colStart?: number;
  /**
   * The end position of the grid item along the row axis.
   */
  rowEnd?: number;
  /**
   * The start position of the grid item along the row axis.
   */
  rowStart?: number;
}
