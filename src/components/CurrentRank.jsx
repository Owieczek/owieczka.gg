import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import unranked from "../assets/unranked1.png";
import { playerRank } from "../services/api";
import { Text } from "./Text Styles/Text";
import { rankIMG, winRatio } from "../utility/CurrentRankUtility";

const CurrentRankCont = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  grid-area: second;
  max-width: 460px;
`;

const TopCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 425px) {
    margin: 10px 0 0 10px;
  }
`;

const BotContText = styled.div`
  padding-left: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    margin-left: 10px;
  }
`;

const RankImg = styled.img`
  width: 35%;
`;

const RankTitle = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 24px;
  margin: 20px 0 0 20px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    margin: 10px 0 0 10px;
  }
  @media screen and (max-width: 1100px) {
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

  @media screen and (max-width: 1100px) {
    font-size: 20px;
    margin: 10px 10px 0 0;
  }
`;
const Option = styled.option`
  color: #000000c7;
  font-weight: 600;
  font-size: 14px;
`;

const RankName = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 28px;

  @media screen and (max-width: 1170px) {
    font-size: 23px;
  }
`;

const RankKD = styled(Text)`
  font-size: 16px;
  color: #000000c7;
  display: inline-block;
`;

export const CurrentRank = () => {
  const [rankData, setRankData] = useState(null);
  const { region, input } = useParams();
  const [selectedOption, setSelectedOption] = useState("Ranked Solo");

  useEffect(() => {
    const fetchRankData = async () => {
      const data = await playerRank(region, input);
      setRankData(data);
    };
    fetchRankData();
  }, [region, input]);

  const rankedSoloData =
    rankData && rankData.find((data) => data.queueType === "RANKED_SOLO_5x5");
  const rankedFlexData =
    rankData && rankData.find((data) => data.queueType === "RANKED_FLEX_SR");

  const selectedData =
    selectedOption === "Ranked Flex" ? rankedFlexData : rankedSoloData;

  return (
    <CurrentRankCont>
      {rankData && selectedData ? (
        <>
          <TopCont>
            <RankTitle>Current Rank</RankTitle>
            <Text>
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <Option value="Ranked Solo">Ranked Solo</Option>
                <Option value="Ranked Flex">Ranked Flex</Option>
              </Select>
            </Text>
          </TopCont>
          <BotCont>
            <RankImg src={rankIMG(selectedData)} alt="" />
            <BotContText>
              <RankName>
                {`${selectedData?.tier} ${selectedData?.rank}`}
              </RankName>
              <RankKD>
                {`${selectedData?.wins}W ${selectedData?.losses}L (${winRatio(
                  selectedData
                )}%) ${selectedData?.leaguePoints} LP`}
              </RankKD>
            </BotContText>
          </BotCont>
        </>
      ) : (
        <>
          <TopCont>
            <RankTitle>Current Rank</RankTitle>
            <Text>
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <Option>Ranked Flex</Option>
                <Option>Ranked Solo</Option>
              </Select>
            </Text>
          </TopCont>
          <BotCont>
            <RankImg src={unranked} alt="" />
            <BotContText>
              <RankName>Unranked</RankName>
              <RankKD>0W 0L 0%</RankKD>
            </BotContText>
          </BotCont>
        </>
      )}
    </CurrentRankCont>
  );
};
