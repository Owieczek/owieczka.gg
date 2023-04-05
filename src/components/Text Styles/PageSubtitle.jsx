import styled from "styled-components";
import { Text } from "./Text";

export const PageSubtitle = styled(Text)`
  font-size: ${({ variant }) => (variant === "large" ? "100px" : "18px")};
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: #666;
  color: ${({ colorVariant }) =>
    colorVariant === "white" ? "white" : "black"};
  max-width: 1000px;

  @media (max-width:768px) {
    font-size: 16px;
  }
`;
