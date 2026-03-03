import type { CSSProperties, HTMLAttributes } from "react";

export interface IFlexProps extends HTMLAttributes<HTMLElement> {
  align?: CSSProperties["alignItems"];
  children: React.ReactNode;
  className?: string;
  /**
   *
   *@default 'row'
   */
  direction?: CSSProperties["flexDirection"];
  flex?: CSSProperties["flex"];
  flexWrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
  isFullWidth?: boolean;
  justify?: CSSProperties["justifyContent"];
  self?: CSSProperties["alignSelf"];
  style?: CSSProperties;
}
