import styled from "styled-components";
import { Text } from "./Text";

export const PageTitle = styled(Text)(({ variant, colorVariant }) => ({
  fontSize: "100px",
  lineHeight: 1.1,
  letterSpacing: "-0.05em",
  fontWeight: 800,
  color: colorVariant === "white" ? "white" : "black",
  maxWidth: 700,

  "@media (max-width: 768px)": {
    fontSize: "58px",
  },
}));
