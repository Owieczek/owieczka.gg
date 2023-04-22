import { useState } from "react";
import styled from "styled-components";
import unranked from "../../assets/unranked1.png";
import { Text } from "../Core/Text";
import { rankIMG, winRatio } from "./CurrentRankUtility";

const Container = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  grid-area: second;
  max-width: 460px;
  min-width: 380px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 425px) {
    margin: 10px 0 0 10px;
  }
`;

const Tier = styled.div`
  padding-left: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    margin-left: 10px;
  }
`;

const Img = styled.img`
  width: 35%;
`;

const Title = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 24px;
  margin: 20px 0 0 20px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    margin: 10px 0 0 10px;
  }
  @media screen and (max-width: 1190px) {
    font-size: 20px;
    margin: 10px 0 0 10px;
  }
`;

const Select = styled.select`
  background-color: #92acfa12;
  border: none;
  border-radius: 20px;
  color: #000000c7;
  font-weight: 600;
  font-size: 24px;
  margin: 20px 20px 0 0;

  @media screen and (max-width: 425px) {
    font-size: 18px;
    margin: 10px 10px 0 0;
  }

  @media screen and (max-width: 1190px) {
    font-size: 20px;
    margin: 10px 10px 0 0;
  }
`;
const Option = styled.option`
  color: #000000c7;
  font-weight: 600;
  font-size: 14px;
`;

const Name = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 28px;

  @media screen and (max-width: 1190px) {
    font-size: 21px;
  }
`;

const KD = styled(Text)`
  font-size: 16px;
  color: #000000c7;
  display: inline-block;

  @media screen and (max-width: 1190px) {
    font-size: 15px;
  }
`;

export const CurrentRank = ({ playerData }) => {
  const [selectedOption, setSelectedOption] = useState("Ranked Solo");

  const rankedSoloData =
    playerData &&
    playerData.rank.find((rank) => rank.queueType === "RANKED_SOLO_5x5");

  const rankedFlexData =
    playerData &&
    playerData.rank.find((rank) => rank.queueType === "RANKED_FLEX_SR");
    
  const selectedData =
    selectedOption === "Ranked Flex" ? rankedFlexData : rankedSoloData;

  return (
    <Container>
      {playerData && selectedData ? (
        <>
          <Top>
            <Title>Current Rank</Title>
            <Text>
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <Option value="Ranked Solo">Ranked Solo</Option>
                <Option value="Ranked Flex">Ranked Flex</Option>
              </Select>
            </Text>
          </Top>
          <Bottom>
            <Img src={rankIMG(selectedData)} alt="" />
            <Tier>
              <Name>{`${selectedData.tier} ${selectedData.rank}`}</Name>
              <KD>
                {`${selectedData.wins}W ${selectedData.losses}L (${winRatio(
                  selectedData
                )}%) ${selectedData.leaguePoints} LP`}
              </KD>
            </Tier>
          </Bottom>
        </>
      ) : (
        <>
          <Top>
            <Title>Current Rank</Title>
            <Text>
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <Option>Ranked Flex</Option>
                <Option>Ranked Solo</Option>
              </Select>
            </Text>
          </Top>
          <Bottom>
            <Img src={unranked} alt="" />
            <Tier>
              <Name>Unranked</Name>
              <KD>0W 0L 0%</KD>
            </Tier>
          </Bottom>
        </>
      )}
    </Container>
  );
};
