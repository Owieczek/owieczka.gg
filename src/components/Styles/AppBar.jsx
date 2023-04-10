import styled from "styled-components";
import owcalogo from "../../assets/owcalogo.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";
import { Text } from "./Text";

const AppBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px #00000019;
  margin: 20px 20px 20px 20px;
  border-radius: 20px;
  height: 50px;
  min-width: 380px;
`;

const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  @media screen and (max-width: 550px) {
    margin-left: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  border-radius: 50%;
`;
const GitLogo = styled.img`
  height: 40px;
  width: auto;
  border-radius: 50%;
  margin-right: 50px;
  @media screen and (max-width: 550px) {
    margin-right: 10px;
  }
`;

const Banner = styled(Text)`
  font-size: 18px;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const Home = styled(Text)`
  font-size: 18px;
  color: #000000c7;
  font-weight: 600;
  margin-left: 50px;

  @media screen and (max-width: 550px) {
    margin-left: 20px;
  }
`;

export const AppBar = () => {
  return (
    <AppBarCont>
      <FirstDiv>
        <Logo src={owcalogo} alt="logo" />
        <Banner>@owcatracker</Banner>
        <StyledLink to="/">
          <Home>Home</Home>
        </StyledLink>
        <StyledLink to="/about">
          <Home>About</Home>
        </StyledLink>
      </FirstDiv>
      <a
        href="https://github.com/Owieczek/owieczka.gg"
        target="_blank"
        style={{ alignItems: "center", display: "flex" }}
      >
        <GitLogo src={github} alt="githublogo" />
      </a>
    </AppBarCont>
  );
};
