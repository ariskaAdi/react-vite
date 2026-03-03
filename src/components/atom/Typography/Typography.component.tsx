import type { HTMLAttributes, ReactNode } from "react";
import type {
  TTypographyComponent,
  TTypographyVariant,
} from "./Typography.type";
import React from "react";
import c from "../../../utils/classNameParser";

interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  component?: TTypographyComponent;
  htmlFor?: string;
  variant?: TTypographyVariant;
}
const Typography = ({
  children,
  className,
  component = "p",
  style,
  variant = "body-md-regular",
  ...props
}: ITypographyProps) => {
  const elemet = React.createElement(
    component,
    {
      ...props,
      className: c(`${variant}`, className),
      style: {
        ...style,
      },
    },
    children,
  );

  return elemet;
};

export default Typography;
