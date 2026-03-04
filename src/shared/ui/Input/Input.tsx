import {
  forwardRef,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import Flex from "../Flex";

export interface IInputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  icon?: {
    left?: () => ReactNode;
    right?: () => ReactNode;
  };
  id: string;
  label?: string | (() => ReactNode);
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: "email" | "number" | "password" | "search" | "text" | "url";
}

const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  { icon, id, label, name, placeholder, required, ...props },
  ref,
) {
  return (
    <Flex className="_Wrapper">
      {label && (
        <div className="_Label">
          {typeof label === "function" ? label() : label}
          {required && <span className="required">*</span>}
        </div>
      )}
      <Flex className="_InputContainer">
        {icon?.left && <div className="left-icon">{icon.left()}</div>}
        <input
          ref={ref}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          {...props}
        />
        {icon?.right && <div className="right-icon">{icon.right()}</div>}
      </Flex>
    </Flex>
  );
});

export default Input;
