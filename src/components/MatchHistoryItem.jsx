import styled from "styled-components";
import { Text } from "./Styles/Text";
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

  @media screen and (max-width: 610px) {
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

  @media screen and (max-width: 610px) {
    grid-area: matchA;
    margin-top: 20px;
  }
`;
const MainStatCont = styled.div`
  display: grid;
  @media screen and (max-width: 610px) {
    grid-area: matchB;
  }
`;
const FirstHistCont = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 20px 0 20px 0;
  @media screen and (max-width: 610px) {
    grid-area: matchC;
  }
`;
const SecondHistCont = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 20px 0 20px 0;
  @media screen and (max-width: 610px) {
    grid-area: matchD;
    padding-right: 30px;
  }
`;

const TopText = styled(Text)`
  font-weight: 600;
  font-size: 17px;
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

  @media screen and (max-width: 610px) {
    display: none;
  }
`;

const HistoryImg = styled.img`
  max-width: 20px;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;

const MVP = styled(Text)`
  background-color: #f5f53de2;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 600;
  margin-top: 10px;
  color: black;
`;
export const MatchHistoryItem = (props) => {
  const { matchData, playerData, region } = props;

  const getMainPlayer = (matchData, playerData) => {
    return matchData.info.participants.find(
      (participant) => participant.puuid === playerData.puuid
    );
  };

  const mainPlayer = getMainPlayer(matchData, playerData);
  const mainPlayerImg = mainPlayer.championId;

  const mainPlayerCS =
    mainPlayer.totalMinionsKilled + mainPlayer.neutralMinionsKilled;

  let winStatus;

  if (mainPlayer.win) {
    if (matchData.info.gameDuration < 300) {
      winStatus = "Remake";
    } else {
      winStatus = "Victory";
    }
  } else {
    winStatus = "Defeat";
  }

  const mainPlayerQueueName = () => {
    const mainPlayerQueueId = matchData.info.queueId;
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
      return "Ranked Flex";
    } else if (mainPlayerQueueId === 1900) {
      return "URF";
    } else {
      return "Normal";
    }
  };

  const mainPlayerTeamId = mainPlayer.teamId;
  const mainPlayerTeam = matchData.info.participants.filter(
    (participant) => participant.teamId === mainPlayerTeamId
  );

  const mainPlayerKda = mainPlayer.challenges.kda;

  const teamKda = mainPlayerTeam.map((participant) => {
    const kda = participant.challenges.kda;
    return kda;
  });

  const maxTeamKda = Math.max(...teamKda);

  return (
    <MatchHistoryCont
      style={{
        backgroundColor:
          winStatus === "Remake"
            ? "#9c9c9c4c"
            : mainPlayer.win
            ? "#00c85336"
            : "#df26264c",
      }}
      key={matchData.metadata.matchId}
    >
      <MainCont>
        <TopText>{mainPlayerQueueName()}</TopText>
        <BotText>{dateFormat(matchData.info.gameEndTimestamp)}</BotText>
        <TopText>{winStatus}</TopText>
        <BotText>{timeFormat(matchData.info.gameDuration)}</BotText>
      </MainCont>
      <MainImg
        src={`https://cdn.communitydragon.org/latest/champion/${mainPlayerImg}/square`}
      />
      <MainStatCont>
        <TopText>{`${mainPlayer.kills} / ${mainPlayer.deaths} / ${mainPlayer.assists}`}</TopText>
        <BotText>{mainPlayerCS} CS</BotText>
        {mainPlayerKda === maxTeamKda && <MVP>MVP</MVP>}
      </MainStatCont>
      <FirstHistCont>
        {matchData.info.participants.slice(0, 5).map((player) => (
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
        {matchData.info.participants.slice(5).map((player) => (
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
