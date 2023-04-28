import styled from "styled-components";
import { Text } from "../Core/Text";
import { dateFormat, timeFormat } from "../../helpers/helpers";
import { determineWinStatus, getMainPlayer, queueNames } from "./utils";
import { MatchHistoryTeam } from "./MatchHistoryTeam";

const Container = styled.div`
  display: grid;
  border-radius: 20px;
  border: solid 1px #00000019;
  grid-template-columns: 1fr auto 0.6fr 0.8fr 0.8fr;
  max-width: 680px;
  max-height: 150px;
  place-items: center;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.matchResult === "Remake"
      ? "#9c9c9c4c"
      : props.mainPlayer.win
      ? "#00c85336"
      : "#df26264c"};

  @media screen and (max-width: 610px) {
    max-height: 300px;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-template-areas:
      "matchA  matchB"
      "matchC  matchD";
  }
`;

const Match = styled.div`
  display: grid;
  margin-left: 40px;
  justify-self: start;

  @media screen and (max-width: 610px) {
    grid-area: matchA;
    margin-top: 20px;
  }
`;
const Stats = styled.div`
  display: grid;
  @media screen and (max-width: 610px) {
    grid-area: matchB;
  }
`;

const FirstTeamCont = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 20px 0 20px 0;
  @media screen and (max-width: 610px) {
    grid-area: matchC;
  }
`;

const SecondTeamCont = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 20px 0 20px 0;
  @media screen and (max-width: 610px) {
    grid-area: matchD;
    padding-right: 30px;
  }
`;

const Top = styled(Text)`
  font-weight: 600;
  font-size: 16px;
  color: #000000ca;
`;

const Bottom = styled(Text)`
  font-size: 14px;
  color: #000000c7;
  margin-left: 3px;
`;

const MainPlayerImg = styled.img`
  width: 100px;
  border-radius: 50%;
  border: solid 2px black;
  margin-left: 30px;
  margin-right: 10px;

  @media screen and (max-width: 610px) {
    display: none;
  }
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

  const mainPlayer = getMainPlayer(matchData, playerData);
  const mainPlayerImg = mainPlayer.championId;

  const mainPlayerCS =
    mainPlayer.totalMinionsKilled + mainPlayer.neutralMinionsKilled;

  const matchResult = determineWinStatus(mainPlayer, matchData);

  const mainPlayerQueueName = () => {
    const mainPlayerQueueId = matchData.info.queueId;
    return queueNames[mainPlayerQueueId] || "Normal";
  };

  const mainPlayerTeamId = mainPlayer.teamId;
  const mainPlayerTeam = matchData.info.participants.filter(
    (participant) => participant.teamId === mainPlayerTeamId
  );

  const mainPlayerKda = mainPlayer.challenges?.kda || null;

  const teamKda = mainPlayerTeam.map((participant) => {
    const kda = participant.challenges?.kda || null;
    return kda;
  });

  const maxTeamKda = Math.max(...teamKda);

  return (
    <Container
      matchResult={matchResult}
      mainPlayer={mainPlayer}
      key={matchData.metadata.matchId}
    >
      <Match>
        <Top>{mainPlayerQueueName()}</Top>
        <Bottom>{dateFormat(matchData.info.gameEndTimestamp)}</Bottom>
        <Top>{matchResult}</Top>
        <Bottom>{timeFormat(matchData.info.gameDuration)}</Bottom>
      </Match>

      <MainPlayerImg
        src={`https://cdn.communitydragon.org/latest/champion/${mainPlayerImg}/square`}
      />

      <Stats>
        <Top>{`${mainPlayer.kills} / ${mainPlayer.deaths} / ${mainPlayer.assists}`}</Top>
        <Bottom>{mainPlayerCS} CS</Bottom>
        {mainPlayerKda === maxTeamKda && <MVP>MVP</MVP>}
      </Stats>

      <FirstTeamCont>
        {matchData.info.participants.slice(0, 5).map((player) => (
          <MatchHistoryTeam
            player={player}
            region={region}
            key={player.summonerName}
          />
        ))}
      </FirstTeamCont>

      <SecondTeamCont>
        {matchData.info.participants.slice(5).map((player) => (
          <MatchHistoryTeam
            player={player}
            region={region}
            key={player.summonerName}
          />
        ))}
      </SecondTeamCont>
    </Container>
  );
};
