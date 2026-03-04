import type { FocusEvent } from "react";
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import s from "./Button.module.scss";
import type { TPallette, TPalletteDepth } from "../../../types/generalType";
import c from "../../../utils/classNameParser";
import Typography from "../../../components/atom/Typography";

interface IButtonPallette {
  pallette?: TPallette;
  palletteDepth?: TPalletteDepth;
  type?: "fill" | "outline";
}

export interface IButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> {
  children: string | ReactNode;
  color?: {
    defaultState?: IButtonPallette;
    hoverState?: IButtonPallette;
  };
  cornerRadius?: "circular" | "sharp" | "smooth";
  isFullwidth?: boolean;
  isSquare?: boolean;
}

const getColorClass = (state?: IButtonPallette) => {
  if (!state) return "";
  const { pallette, palletteDepth, type } = state;

  return c(
    `${type !== "outline" ? "bg" : "border"}-${pallette}-${palletteDepth}`,
  );
};

const getRGBAFromCurrentColor = (color: string, alpha = 0.5) => {
  const [r, g, b] = color.match(/\d+/g)?.map(Number) || [0, 0, 0];

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const fallbackColor: IButtonProps["color"] = {
  defaultState: {
    pallette: "neutral",
    palletteDepth: 800,
    type: "fill",
  },
  hoverState: {
    pallette: "neutral",
    palletteDepth: 700,
    type: "fill",
  },
};

const Button = ({
  children,
  color,
  cornerRadius = "smooth",
  isFullwidth,
  isSquare,
  ...props
}: IButtonProps) => {
  const appliedColor: IButtonProps["color"] = {
    defaultState: {
      ...fallbackColor.defaultState,
      ...color?.defaultState,
    },
    hoverState: {
      ...fallbackColor.hoverState,
      ...color?.hoverState,
    },
  };

  const { defaultState, hoverState } = appliedColor;
  const [currentColor, setCurrentColor] = useState("");

  const handleFocus = (e: FocusEvent<HTMLButtonElement>) => {
    const backgroundColor =
      defaultState?.type === "fill"
        ? window.getComputedStyle(e.currentTarget).backgroundColor
        : window.getComputedStyle(e.currentTarget).color;

    setCurrentColor(getRGBAFromCurrentColor(backgroundColor, 0.2));
  };

  return (
    <button
      {...props}
      className={c(
        s._Button,
        isFullwidth && s._Fullwidth,
        isSquare && s._Square,
        getColorClass(defaultState),
        props.className,
        s[cornerRadius],
      )}
      onMouseEnter={(e) => {
        props.onMouseEnter?.(e);
        if (hoverState)
          e.currentTarget.className = c(
            getColorClass(hoverState),
            props.className,
            s._Button,
            isFullwidth && s._Fullwidth,
            isSquare && s._Square,
            s[cornerRadius],
          );
      }}
      onMouseLeave={(e) => {
        props.onMouseLeave?.(e);
        if (defaultState)
          e.currentTarget.className = c(
            getColorClass(defaultState),
            props.className,
            s._Button,
            isFullwidth && s._Fullwidth,
            isSquare && s._Square,
            s[cornerRadius],
          );
      }}
      onFocus={handleFocus}
      onBlur={() => setCurrentColor("")}
      style={{
        ...props.style,
        boxShadow: currentColor ? `0 0 0 3px ${currentColor}` : "none",
      }}>
      {typeof children === "string" ? (
        <Typography variant="body-md-semibold" className="neutral-5">
          {children}
        </Typography>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
