import styled from "styled-components";
import "@fontsource/inter";

export const Text = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: #666;
`;
