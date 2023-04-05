import styled from "styled-components";
import { Container } from "../components/Container";
import { ProfileInfo } from "../components/ProfileInfo";
import { CurrentRank } from "../components/CurrentRank";
import { FavoriteRole } from "../components/FavoriteRole";
import { ChampionStat } from "../components/ChampionStat";
import { MatchHistory } from "../components/MatchHistory";
import { SearchBar } from "../components/SearchBar";


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

  return (
    <Cont>
      <SearchBar  />
      <ProfileInfo  />
      <CurrentRank />
      <FavoriteRole />
      <ChampionStat />
      <MatchHistory />
    </Cont>
  );
};
