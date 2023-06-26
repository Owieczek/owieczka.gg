import styled from "styled-components";
import { Text } from "../Core/Text";

const Container = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  text-align: center;
  grid-area: first;
  display: grid;
  place-items: center;
  max-width: 350px;
`;

const Img = styled.img`
  max-width: 100px;
  border-radius: 50%;
  border: solid 4px #000000c7;
  margin: 20px 30px 0px 30px;
`;

const Name = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 20px;
  display: block;
  padding-left: 10px;
  padding-right: 10px;
`;

const Ranking = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: #0000009a;
`;

const Content = styled.div`
  margin-bottom: 10px;
`;

export const ProfileInfo = ({ playerData }) => {
  return (
    <Container>
      {playerData && (
        <>
          <Img
            src={
              "http://ddragon.leagueoflegends.com/cdn/13.6.1/img/profileicon/" +
              playerData.profileIconId +
              ".png"
            }
          />
          <Content>
            <Name>{playerData.name}</Name>
            <Ranking>Level: {playerData.summonerLevel}</Ranking>
          </Content>
        </>
      )}
    </Container>
  );
};
