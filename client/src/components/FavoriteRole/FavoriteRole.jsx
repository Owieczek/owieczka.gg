import styled from "styled-components";
import { Text } from "../Core/Text";
import { getMostFrequentRole, roleImg, roleName } from "./favoriteRoleUtility";
import { getMainPlayer } from "../../helpers/helpers";

const Container = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  grid-area: third;
  max-width: 400px;
  min-width: 350px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0 0px 0px;
  width: 100%;

  @media screen and (max-width: 425px) {
    margin: 10px 0 0 10px;
  }
`;

const Content = styled.div`
  margin-left: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    margin-left: 10px;
  }
`;

const Img = styled.img`
  width: 45%;
`;

const Title = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 24px;
  margin: 20px 0 0 20px;

  @media screen and (max-width: 425px) {
    font-size: 18px;
    margin: 10px 0 0 10px;
  }
`;

const Name = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 30px;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const Winratio = styled(Text)`
  font-size: 16px;
  color: #000000c7;
`;

export const FavoriteRole = ({ playerData, matchesData }) => {
  const mainPlayer = getMainPlayer(matchesData, playerData);

  const roles = mainPlayer.map((data) => {
    return data.teamPosition;
  });

  const mostFrequentRole = getMostFrequentRole(roles);

  const wins = mainPlayer.reduce((totalWins, data) => {
    if (data.teamPosition === mostFrequentRole && data.win) {
      return totalWins + 1;
    }
    return totalWins;
  }, 0);

  const losses = mainPlayer.reduce((totalLosses, data) => {
    if (data.teamPosition === mostFrequentRole && !data.win) {
      return totalLosses + 1;
    }
    return totalLosses;
  }, 0);

  const winRatio =
    mostFrequentRole && wins + losses !== 0
      ? ((wins / (wins + losses)) * 100).toFixed(0)
      : null;

  return (
    <Container>
      <Top>
        <Title>Favourite role</Title>
      </Top>
      <Bottom>
        <Img src={roleImg(mostFrequentRole)} alt="" />
        <Content>
          <Name> {roleName(mostFrequentRole)}</Name>
          <Winratio>{winRatio ? `Win Ratio ${winRatio}%` : null}</Winratio>
        </Content>
      </Bottom>
    </Container>
  );
};
