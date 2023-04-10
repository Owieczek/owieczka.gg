import styled from "styled-components";
import { Text } from "./Styles/Text";
import { useState } from "react";

const ChampionStatsCont = styled.div`
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

const ChampionInfo = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 40px) 70px 95px 60px;
  grid-gap: 10px;
  margin-top: 20px;
  justify-items: center;
  padding-left: 20px;
`;
const ColCont = styled.div`
  display: grid;
  justify-self: start;
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

export const ChampionStat = ({ matches, puuid }) => {
  const [more, setMore] = useState(false);
  const mainPlayer = matches.map((match) =>
    match.info.participants.find((participant) => participant.puuid === puuid)
  );

  const championNameChange = {
    MonkeyKing: "Wukong",
    FiddleSticks: "Fiddlesticks",
  };

  const championStats = mainPlayer.reduce((stats, player) => {
    const wins = player.win;
    const championImg = player.championId;
    let championName =
      championNameChange[player.championName] || player.championName;
    if (championName.length > 8) {
      championName = championName.slice(0, 8) + "...";
    }
    const kills = player.kills;
    const deaths = player.deaths;
    const assists = player.assists;
    const minionsScore =
      player.totalMinionsKilled + player.neutralMinionsKilled;
    const gamesPlayed = stats[championName]
      ? stats[championName].gamesPlayed + 1
      : 1;
    const totalKills = stats[championName]
      ? stats[championName].totalKills + kills
      : kills;
    const totalDeaths = stats[championName]
      ? stats[championName].totalDeaths + deaths
      : deaths;
    const totalAssists = stats[championName]
      ? stats[championName].totalAssists + assists
      : assists;
    const totalMinionsScore = stats[championName]
      ? stats[championName].totalMinionsScore + minionsScore
      : minionsScore;

    const totalWins = stats[championName]
      ? stats[championName].totalWins + wins
      : wins;

    return {
      ...stats,
      [championName]: {
        gamesPlayed,
        totalKills,
        totalDeaths,
        totalAssists,
        totalMinionsScore,
        championImg,
        totalWins,
      },
    };
  }, {});

  const championNames = Object.keys(championStats);

  return (
    <ChampionStatsCont>
      <StatsTitle>Champion stats</StatsTitle>
      {championNames
        .slice(0, more ? championNames.length : 4)
        .map((name, index) => {
          const stats = championStats[name];
          const averageKills = (stats.totalKills / stats.gamesPlayed).toFixed(
            1
          );
          const averageDeaths = (stats.totalDeaths / stats.gamesPlayed).toFixed(
            1
          );
          const averageAssists = (
            stats.totalAssists / stats.gamesPlayed
          ).toFixed(1);

          const winsPer = ((stats.totalWins / stats.gamesPlayed) * 100).toFixed(
            0
          );

          const averageMinionsKilled = (
            stats.totalMinionsScore / stats.gamesPlayed
          ).toFixed(1);

          const kdaRatio =
            stats.totalDeaths === 0
              ? "Perfect"
              : (
                  (stats.totalKills + stats.totalAssists) /
                  stats.totalDeaths
                ).toFixed(1) + ":1 KDA";

          return (
            <ChampionInfo key={index}>
              <StatsImg
                src={`https://cdn.communitydragon.org/latest/champion/${stats.championImg}/square`}
                alt=""
              />
              <ColCont>
                <TopInfo>{name}</TopInfo>
                <BottomInfo>CS {averageMinionsKilled}</BottomInfo>
              </ColCont>
              <ColCont>
                <TopInfo>{kdaRatio}</TopInfo>
                <BottomInfo>
                  {averageKills} / {averageDeaths} / {averageAssists}
                </BottomInfo>
              </ColCont>
              <ColCont>
                <TopInfo>{winsPer}%</TopInfo>
                <BottomInfo>{stats.gamesPlayed} played</BottomInfo>
              </ColCont>
            </ChampionInfo>
          );
        })}
      <Text>
        <ShowMoreBtn onClick={() => setMore(!more)}>
          {more ? "Show Less" : "Show More"}
        </ShowMoreBtn>
      </Text>
    </ChampionStatsCont>
  );
};
