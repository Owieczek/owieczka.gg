import styled from "styled-components";
import challbot from "../assets/challbot.png";
import { Text } from "./Text Styles/Text";

const FavoriteRoleCont = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  grid-area: third;
  max-width: 400px;
  min-width: 350px;
`;

const TopCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0 0px 0px;
  width: 100%;

  @media screen and (max-width: 425px) {
    margin: 10px 0 0 10px;
  }
`;

const BotContText = styled.div`
  margin-left: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    margin-left: 10px;
  }
`;

const RoleImg = styled.img`
  width: 50%;
`;

const RankTitle = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 24px;
  margin: 20px 0 0 20px;

  @media screen and (max-width: 425px) {
    font-size: 18px;
    margin: 10px 0 0 10px;
  }
`;

const RoleName = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 30px;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const RoleWinratio = styled(Text)`
  font-size: 16px;
  color: #000000c7;
`;

export const FavoriteRole = () => {
  return (
    <FavoriteRoleCont>
      <TopCont>
        <RankTitle>Favourite role</RankTitle>
      </TopCont>
      <BotCont>
        <RoleImg src={challbot} alt="" />
        <BotContText>
          <RoleName>AD Carry</RoleName>
          <RoleWinratio>Win Ratio 100%</RoleWinratio>
        </BotContText>
      </BotCont>
    </FavoriteRoleCont>
  );
};
