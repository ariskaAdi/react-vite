import { forwardRef } from "react";
import type { IFlexProps } from "./Flex.type";

const Flex = forwardRef<HTMLDivElement, IFlexProps>(function Flex(
  {
    align,
    children,
    direction,
    flex,
    flexWrap,
    gap,
    isFullWidth,
    justify,
    self,
    style,
    ...props
  },
  ref,
) {
  const isFullwidthStyles = isFullWidth ? { width: "100%" } : {};

  return (
    <div
      {...props}
      ref={ref}
      style={{
        ...isFullwidthStyles,
        ...style,
        alignItems: align,
        alignSelf: self,
        display: "flex",
        flex,
        flexDirection: direction,
        flexWrap,
        gap,
        justifyContent: justify,
      }}>
      {children}
    </div>
  );
});

export default Flex;
