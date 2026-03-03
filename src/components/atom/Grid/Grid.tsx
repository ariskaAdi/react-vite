import c from "../../../utils/classNameParser";
import s from "./Grid.module.css";
import type { IGridColProps, IGridProps } from "./Grid.type";

const Grid = ({
  align,
  children,
  className,
  columns = 12,
  gap,
  rows = 1,
  style,
}: IGridProps) => {
  return (
    <div
      className={c(s._Wrapper, className)}
      style={{
        ...style,
        alignItems: align,
        gap,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}>
      {children}
    </div>
  );
};

Grid.Col = function GridCol({
  children,
  colEnd,
  colStart,
  rowEnd,
  rowStart,
}: IGridColProps) {
  return (
    <div
      style={{
        width: "100%",
        ...(rowStart && rowEnd
          ? { gridRow: `${rowStart}/span ${rowEnd}` }
          : {}),
        ...(colStart && colEnd
          ? { gridColumn: `${colStart}/span ${colEnd}` }
          : {}),
      }}>
      {children}
    </div>
  );
};

export default Grid;
