import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Text } from "../../../../Core/Text";

export const Img = styled.img`
  max-width: 20px;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Names = styled(Text)`
  font-size: 14px;
  color: #000000c7;
  margin-left: 3px;
`;
