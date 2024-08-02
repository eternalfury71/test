import { ReactNode } from "react";
import { StyledButton } from "./Button.styled";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  primary?: boolean;
  size?: "default" | "small" | "big";
};

export function Button(props: ButtonProps) {
  const { children, primary, size = "default", className } = props;
  return (
    <StyledButton $primary={primary} $size={size} className={className}>
      {children}
    </StyledButton>
  );
}
