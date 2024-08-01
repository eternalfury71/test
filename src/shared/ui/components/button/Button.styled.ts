import styled from "styled-components";

const buttonSize: Record<string, string> = {
  big: "13px 17px",
  default: "12px 14px",
  small: "8px 13px",
};

export const StyledButton = styled.button<{
  $primary?: boolean;
  $size: "default" | "small" | "big";
}>`
  background: ${(props) => (props.$primary ? "#0965CC" : "#fff")};
  color: ${(props) => (props.$primary ? "#fff" : "0965CC")};
  padding: ${(props) => buttonSize[props.$size]};
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
