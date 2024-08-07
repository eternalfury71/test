import { ReactNode } from "react";
import { StyledButton } from "./Button.styled";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  primary?: boolean;
  ghost?: boolean;
  size?: "default" | "small" | "big";
};

export function Button(props: ButtonProps) {
  const {
    children,
    primary = true,
    size = "default",
    ghost,
    className,
  } = props;
  return (
    <StyledButton
      $primary={primary}
      $size={size}
      className={className}
      $ghost={ghost}
    >
      {children}
    </StyledButton>
  );
}
