import styled from "styled-components";
import { Text } from "../Core/Text";
import { useState } from "react";
import { championNameFormatted } from "./ChampionStatUtility";
import { ChampionStatItem } from "./ChampionStatItem";
import { getMainPlayer } from "../../helpers/helpers";

const Container = styled.div`
  display: grid;
  border-radius: 20px;
  border: solid 1px #00000019;
  max-width: 330px;
  grid-area: fourth;
  position: sticky;
  top: 50px;

  @media screen and (max-width: 1070px) {
    position: relative;
    top: 0;
  }
`;

const Button = styled.button`
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

const Title = styled(Text)`
  margin: 20px 0px 0px 20px;
  font-size: 19px;
  font-weight: 600;
  color: #000000ca;
`;

export const ChampionStat = ({ playerData, matchesData }) => {
  const [more, setMore] = useState(false);

  const mainPlayer = getMainPlayer(matchesData, playerData);

  const championStats = mainPlayer.reduce((stats, player) => {
    const {
      win,
      championId,
      championName,
      kills,
      deaths,
      assists,
      totalMinionsKilled,
      neutralMinionsKilled,
    } = player;
    const name = championNameFormatted(championName);
    const gamesPlayed = (stats[name]?.gamesPlayed ?? 0) + 1;
    const totalKills = (stats[name]?.totalKills ?? 0) + kills;
    const totalDeaths = (stats[name]?.totalDeaths ?? 0) + deaths;
    const totalAssists = (stats[name]?.totalAssists ?? 0) + assists;
    const totalMinionsScore =
      (stats[name]?.totalMinionsScore ?? 0) +
      totalMinionsKilled +
      neutralMinionsKilled;
    const totalWins = (stats[name]?.totalWins ?? 0) + win;

    return {
      ...stats,
      [name]: {
        gamesPlayed,
        totalKills,
        totalDeaths,
        totalAssists,
        totalMinionsScore,
        championImg: championId,
        totalWins,
      },
    };
  }, {});

  const championNames = Object.keys(championStats);

  return (
    <Container>
      <Title>Champion stats</Title>
      {championNames
        .slice(0, more ? championNames.length : 4)
        .map((championName) => {
          return (
            <ChampionStatItem
              championName={championName}
              championStats={championStats}
              key={championName}
            />
          );
        })}
      <Text>
        <Button onClick={() => setMore(!more)}>
          {more ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </Container>
  );
};
