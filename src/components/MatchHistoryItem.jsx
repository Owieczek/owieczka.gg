import styled from "styled-components";
import { Text } from "./Text Styles/Text";
import React from "react";
import { Link } from "react-router-dom";
import {
  dateFormat,
  shortenPlayerName,
  timeFormat,
} from "../utility/MatchHistoryUtility";

const MatchHistoryCont = styled.div`
  display: grid;
  border-radius: 20px;
  border: solid 1px #00000019;
  grid-template-columns: 1fr auto 0.6fr 0.8fr 0.8fr;
  max-width: 680px;
  max-height: 150px;
  place-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 510px) {
    max-height: 300px;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-template-areas:
      "matchA  matchB"
      "matchC  matchD";
  }
`;

const MainCont = styled.div`
  display: grid;
  margin-left: 40px;
  justify-self: start;

  @media screen and (max-width: 510px) {
    grid-area: matchA;
    margin-top: 20px;
  }
`;
const MainStatCont = styled.div`
  display: grid;
  @media screen and (max-width: 510px) {
    grid-area: matchB;
  }
`;
const FirstHistCont = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 20px 0 20px 0;
  @media screen and (max-width: 510px) {
    grid-area: matchC;
  }
`;
const SecondHistCont = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 20px 0 20px 0;
  @media screen and (max-width: 510px) {
    grid-area: matchD;
    padding-right: 30px;
  }
`;

const TopText = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  color: #000000ca;
`;

const BotText = styled(Text)`
  font-size: 14px;
  color: #000000c7;
  margin-left: 3px;
`;

const MainImg = styled.img`
  width: 100px;
  border-radius: 50%;
  border: solid 2px black;
  margin-left: 30px;
  margin-right: 10px;

  @media screen and (max-width: 510px) {
    display: none;
  }
`;

const HistoryImg = styled.img`
  max-width: 20px;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;

export const MatchHistoryItem = (props) => {
  const { match, puuid, region } = props;
  const mainPlayer = match.info.participants.find(
    (participant) => participant.puuid === puuid
  );

  const mainPlayerImg = mainPlayer.championId;

  const mainPlayerCS =
    mainPlayer.totalMinionsKilled + mainPlayer.neutralMinionsKilled;

  const winStatus = mainPlayer.win ? "Victory" : "Defeat";

  const mainPlayerQueueName = () => {
    const mainPlayerQueueId = match.info.queueId;
    if (mainPlayerQueueId === 420) {
      return "Ranked Solo";
    } else if (mainPlayerQueueId === 700) {
      return "Clash";
    } else if (mainPlayerQueueId === 450) {
      return "ARAM";
    } else if (mainPlayerQueueId === 400) {
      return "Normal";
    } else if (mainPlayerQueueId === 900) {
      return "ARURF";
    } else if (mainPlayerQueueId === 440) {
      return "Flex 5:5 Rank";
    } else if (mainPlayerQueueId === 1900) {
      return "URF";
    }
  };

  return (
    <MatchHistoryCont
      style={{
        backgroundColor: mainPlayer.win ? "#7dcaf130" : "#df26264c",
      }}
      key={match.metadata.matchId}
    >
      <MainCont>
        <TopText>{mainPlayerQueueName()}</TopText>
        <BotText>{dateFormat(match.info.gameEndTimestamp)}</BotText>
        <TopText>{winStatus}</TopText>
        <BotText>{timeFormat(match.info.gameDuration)}</BotText>
      </MainCont>
      <MainImg
        src={`https://cdn.communitydragon.org/latest/champion/${mainPlayerImg}/square`}
      />
      <MainStatCont>
        <TopText>{`${mainPlayer.kills} / ${mainPlayer.deaths} / ${mainPlayer.assists}`}</TopText>
        <BotText>{mainPlayerCS} CS</BotText>
      </MainStatCont>
      <FirstHistCont>
        {match.info.participants.slice(0, 5).map((player) => (
          <React.Fragment key={player.summonerName}>
            <HistoryImg
              src={`https://cdn.communitydragon.org/latest/champion/${player.championId}/square`}
            />
            <StyleLink to={`/${region}/${player.summonerName}`}>
              <BotText>{shortenPlayerName(player.summonerName)}</BotText>
            </StyleLink>
          </React.Fragment>
        ))}
      </FirstHistCont>
      <SecondHistCont>
        {match.info.participants.slice(5).map((player) => (
          <React.Fragment key={player.summonerName}>
            <HistoryImg
              src={`https://cdn.communitydragon.org/latest/champion/${player.championId}/square`}
            />
            <StyleLink to={`/${region}/${player.summonerName}`}>
              <BotText>{shortenPlayerName(player.summonerName)}</BotText>
            </StyleLink>
          </React.Fragment>
        ))}
      </SecondHistCont>
    </MatchHistoryCont>
  );
};
