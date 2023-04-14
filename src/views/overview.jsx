import styled from "styled-components";
import { Container } from "../components/Styles/Container";
import { ProfileInfo } from "../components/ProfileInfo";
import { CurrentRank } from "../components/CurrentRank";
import { FavoriteRole } from "../components/FavoriteRole";
import { ChampionStat } from "../components/ChampionStat";
import { MatchHistory } from "../components/MatchHistory";
import { SearchBar } from "../components/SearchBar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getMatchesData, getPlayerData } from "../services/api";

const Cont = styled(Container)`
  display: grid;
  row-gap: 50px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 806px) {
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-areas:
      "search"
      "first"
      "second"
      "third"
      "fourth"
      "fifth";
  }

  @media screen and (min-width: 1070px) {
    column-gap: 70px;
    align-items: start;
    justify-content: center;
    grid-template-columns: auto;
    grid-template-areas:
      "search search search search search"
      "first second second third third"
      "fourth fourth fifth fifth fifth";
  }
  @media screen and (min-width: 806px) and (max-width: 1070px) {
    justify-items: center;
    align-items: start;

    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "search search"
      "first second "
      "third fourth "
      "fifth fifth ";
  }
`;

export const OverviewView = () => {
  const { region, input } = useParams();
  const [playerData, setPlayerData] = useState();
  const [matchesData, setMatchesData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await getPlayerData(region, input);
        const matchesData = await getMatchesData(
          playerData.matches.slice(0, 20)
        );

        setError(false);
        setPlayerData(playerData);
        setMatchesData(matchesData);
        console.log(playerData);
        console.log(matchesData);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [region, input]);

  return (
    <Cont>
      {error ? (
        <SearchBar error={true} />
      ) : (
        <>
          <SearchBar error={false} />
          <ProfileInfo playerData={playerData} />
          <CurrentRank playerData={playerData} />
          <FavoriteRole playerData={playerData} matchesData={matchesData} />
          <ChampionStat playerData={playerData} matchesData={matchesData} />
          <MatchHistory
            playerData={playerData}
            matchesData={matchesData}
            region={region}
          />
        </>
      )}
    </Cont>
  );
};
