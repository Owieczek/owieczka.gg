import { averageStats } from "./ChampionStatUtility";
import { Text } from "../Core/Text";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 40px) 70px 95px 60px;
  grid-gap: 10px;
  margin-top: 20px;
  justify-items: center;
  padding-left: 20px;
`;
const Column = styled.div`
  display: grid;
  justify-self: start;
`;

const Img = styled.img`
  width: 40px;
  height: auto;
  border-radius: 50%;
`;

const TopRow = styled(Text)`
  font-weight: bold;
  color: #000000ca;
`;

const BottomRow = styled(Text)`
  font-size: 12px;
  color: #000000c7;
`;

export const ChampionStatItem = (props) => {
  const { championName, championStats } = props;

  const stats = championStats[championName];
  const averageKills = averageStats(stats.totalKills, stats.gamesPlayed);
  const averageDeaths = averageStats(stats.totalDeaths, stats.gamesPlayed);
  const averageAssists = averageStats(stats.totalAssists, stats.gamesPlayed);
  const averageMinionsKilled = averageStats(
    stats.totalMinionsScore,
    stats.gamesPlayed
  );

  const winsPer = ((stats.totalWins / stats.gamesPlayed) * 100).toFixed(0);

  const kdaRatio =
    stats.totalDeaths === 0
      ? "Perfect"
      : ((stats.totalKills + stats.totalAssists) / stats.totalDeaths).toFixed(
          1
        ) + ":1 KDA";

  return (
    <Container>
      <Img
        src={`https://cdn.communitydragon.org/latest/champion/${stats.championImg}/square`}
        alt=""
      />
      <Column>
        <TopRow>{championName}</TopRow>
        <BottomRow>CS {averageMinionsKilled}</BottomRow>
      </Column>
      <Column>
        <TopRow>{kdaRatio}</TopRow>
        <BottomRow>
          {averageKills} / {averageDeaths} / {averageAssists}
        </BottomRow>
      </Column>
      <Column>
        <TopRow>{winsPer}%</TopRow>
        <BottomRow>{stats.gamesPlayed} played</BottomRow>
      </Column>
    </Container>
  );
};
