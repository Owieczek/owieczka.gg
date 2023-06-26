import styled from "styled-components";
import { Container } from "../components/Core/Container";
import { ChampionStat } from "../components/ChampionStats/ChampionStat";
import { MatchHistory } from "../components/MatchHistory/MatchHistory";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getMatchesData, getPlayerData } from "../services/api";
import { Spinner } from "../components/Core/Spinner";
import { CurrentRank } from "../components/CurrentRank/CurrentRank";
import { FavoriteRole } from "../components/FavoriteRole/FavoriteRole";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";

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

  const [data, setData] = useState({
    player: null,
    matches: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const player = await getPlayerData(region, input);

        const matches = await getMatchesData(player.matches);
        setError(false);

        setData({
          player,
          matches,
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [region, input]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Cont>
      <SearchBar error={error} />

      {!error && (
        <>
          <SearchBar error={false} />

          <ProfileInfo playerData={data.player} />
          <CurrentRank playerData={data.player} />
          <FavoriteRole playerData={data.player} matchesData={data.matches} />
          <ChampionStat playerData={data.player} matchesData={data.matches} />
          <MatchHistory
            playerData={data.player}
            matchesData={data.matches}
            region={region}
          />
        </>
      )}
    </Cont>
  );
};
