import { type ReactNode } from "react";
import Flex from "../Flex";
import c from "../../../utils/classNameParser";
import s from "./CardContainer.module.scss";
import Typography from "../Typography";

interface ICardContainerProps {
  children: ReactNode;
  className?: string;
  head: string | (() => ReactNode);
  variant?: "variant-1" | "variant-2" | "variant-3";
}

const CardContainer = ({
  children,
  className,
  head,
  variant = "variant-1",
}: ICardContainerProps & { children: ReactNode }) => {
  return (
    <Flex className={c(s._Wrapper, s[variant], className)} direction="column">
      <Flex className={s._Head}>
        {typeof head === "function" ? (
          <Typography
            variant={
              variant === "variant-1"
                ? "heading-6-bold"
                : variant === "variant-2"
                  ? "body-l-bold"
                  : "heading-6-bold"
            }>
            {head()}
          </Typography>
        ) : (
          head
        )}
      </Flex>
      <Flex className={s._Body}>{children}</Flex>
    </Flex>
  );
};

export default CardContainer;
