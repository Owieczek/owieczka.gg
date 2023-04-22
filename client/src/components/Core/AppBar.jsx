import styled from "styled-components";
import owcalogo from "../../assets/owcalogo.png";
import github from "../../assets/github.png";
import { Link as RouterLink } from "react-router-dom";
import { Text } from "./Text";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px #00000019;
  margin: 20px 20px 20px 20px;
  border-radius: 20px;
  height: 50px;
  min-width: 380px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  @media screen and (max-width: 650px) {
    margin-left: 10px;
  }
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const SheepLogo = styled.img`
  height: 40px;
  width: auto;
  border-radius: 50%;
`;
const GitHubLogo = styled.img`
  height: 40px;
  width: auto;
  border-radius: 50%;
  margin-right: 50px;
  @media screen and (max-width: 650px) {
    margin-right: 10px;
    margin-left: 30px;
  }
`;

const Banner = styled(Text)`
  font-size: 18px;
  @media screen and (max-width: 650px) {
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
    <Container>
      <Navigation>
        <SheepLogo src={owcalogo} alt="logo" />
        <Banner>@owcatracker</Banner>
        <Link to="/">
          <Home>Home</Home>
        </Link>
        <Link to="/about">
          <Home>About</Home>
        </Link>
      </Navigation>
      <Link
        to="https://github.com/Owieczek/owieczka.gg"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubLogo src={github} alt="githublogo" />
      </Link>
    </Container>
  );
};
