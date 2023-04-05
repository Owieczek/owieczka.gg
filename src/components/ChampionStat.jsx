import styled from "styled-components";
import Caitlyn from "../assets/Caitlyn.webp";
import { useState } from "react";
import { Text } from "./Text Styles/Text";

const ChampionStatsCont = styled.div`
  display: grid;
  border-radius: 20px;
  border: solid 1px #00000019;
  max-width: 350px;
  grid-area: fourth;
`;

const ChampionInfo = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 40px) 70px 90px 70px;
  grid-gap: 10px;
  margin-top: 20px;
  justify-items: center;
  padding-left: 20px;

  /* @media only screen and (max-width: 390px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  } */
`;
const ColCont = styled.div`
  display: grid;
`;

const StatsImg = styled.img`
  width: 40px;
  height: auto;
  border-radius: 50%;
`;

const TopInfo = styled(Text)`
  font-weight: bold;
  color: #000000ca;
`;

const BottomInfo = styled(Text)`
  font-size: 12px;
  color: #000000c7;
`;

const ShowMoreBtn = styled.button`
  cursor: pointer;
  margin: 20px 20px 20px 20px;
  border-radius: 2em;
  max-width: calc(100% - 40px);
  width: 100%;
  height: 50px;
  border: 1px #0000003e;
  font-weight: bold;
  font-size: 15px;
  color: #1638b3;
  background-color: #92acfa12;
`;

const StatsTitle = styled(Text)`
  margin: 20px 0px 0px 20px;
  font-size: 19px;
  font-weight: 600;
  color: #000000ca;
`;

export const ChampionStat = () => {
  const [numEl, setNumEl] = useState(4);
  const [isShowingMore, setIsShowingMore] = useState(false);

  const handleBtnClick = () => {
    setNumEl((prevNumEl) => (prevNumEl === 4 ? 8 : 4));
    setIsShowingMore((prevIsShowingMore) => !prevIsShowingMore);
  };

  const btnText = isShowingMore ? "Show Less" : "Show More";

  return (
    <ChampionStatsCont>
      <StatsTitle>Champion stats</StatsTitle>
      {[...Array(numEl)].map((_, index) => (
        <ChampionInfo key={index}>
          <StatsImg src={Caitlyn} alt="" />

          <ColCont>
            <TopInfo>Caitlyn</TopInfo>
            <BottomInfo>CS 183 (6.1)</BottomInfo>
          </ColCont>

          <ColCont>
            <TopInfo>11.5:1 KDA</TopInfo>
            <BottomInfo>10.0 / 2.0 / 13.0</BottomInfo>
          </ColCont>

          <ColCont>
            <TopInfo>100%</TopInfo>
            <BottomInfo>1 played</BottomInfo>
          </ColCont>
        </ChampionInfo>
      ))}
      <Text>
        <ShowMoreBtn onClick={handleBtnClick}>{btnText}</ShowMoreBtn>
      </Text>
    </ChampionStatsCont>
  );
};
