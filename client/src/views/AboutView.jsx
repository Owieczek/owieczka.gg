import styled from "styled-components";
import { Text } from "../components/Core/Text";

const Container = styled.div`
  border: solid 1px #00000019;
  display: flex;
  max-width: 800px;
  min-width: 400px;
  border-radius: 20px;
  margin: auto;
  margin-top: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 20px 0 20px;
`;

const Title = styled(Text)`
  font-size: 50px;
  font-weight: 600;
  color: #000000c7;
  margin-top: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 530px) {
    font-size: 30px;
  }
`;

const SubTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: #666;
  margin-bottom: 100px;

  @media screen and (max-width: 530px) {
    font-size: 15px;
  }
`;

export const AboutView = () => (
  <Container>
    <TextContainer>
      <Title>League of Legends Tracker</Title>

      <SubTitle>
        Tool designed for players who want to track their progress in the game
        and improve their skills. With my app, you can monitor your stats,
        analyze your matches, and receive valuable tips to enhance your
        gameplay.
      </SubTitle>

      <Text style={{ marginBottom: "50px" }}>
        April 10, 2023, Version 1.0.0 released.{" "}
        <a
          href="https://github.com/Owieczek"
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          Created by Owieczka
        </a>
      </Text>
    </TextContainer>
  </Container>
);
