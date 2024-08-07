import styled, { css } from "styled-components";

const buttonSize: Record<string, string> = {
  big: "16px 24px",
  default: "12px 20px",
  small: "8px 16px",
};

const fontSize: Record<string, string> = {
  big: "16px",
  default: "14px",
  small: "12px",
};

const commonStyles = css<{
  $primary?: boolean;
  $ghost?: boolean;
  $size: "default" | "small" | "big";
}>`
  padding: ${(props) => buttonSize[props.$size]};
  font-size: ${(props) => fontSize[props.$size]};
  font-weight: 600;
  border-radius: 6px;
  border: ${(props) => (props.$ghost ? "1px solid #0965CC" : "none")};
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border-color 0.3s;

  ${(props) =>
    props.$primary &&
    css`
      background-color: #0965cc;
      color: #fff;
      &:hover {
        background-color: #005bb5;
      }
      &:active {
        background-color: #004a94;
        scale: 1.01;
        transition: ease-in-out;
      }
    `}

  ${(props) =>
    props.$ghost &&
    css`
      background: none;
      color: #0965cc;
      &:hover {
        background-color: rgba(9, 101, 204, 0.1);
      }
      &:active {
        background-color: rgba(9, 101, 204, 0.2);
        scale: 1.01;
        transition: ease-in-out;
      }
    `}
`;

export const StyledButton = styled.button<{
  $primary?: boolean;
  $ghost?: boolean;
  $size: "default" | "small" | "big";
}>`
  ${commonStyles}
`;
