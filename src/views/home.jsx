import { PageSubtitle } from "../components/Styles/PageSubtitle";
import { PageTitle } from "../components/Styles/PageTitle";
import { Section } from "../components/Styles/Section";
import { SearchBar } from "../components/SearchBar";
export const HomeView = () => {
  return (
    <Section>
      <PageTitle variant="large" colorVariant="black">
        The successor to OPGG
      </PageTitle>
      <PageSubtitle variant="medium" colorVariant="black">
        League tracker provides insight to League of Legends players about thier
        game performance, match history,
        <br /> and ranked ladder via Riot API.
      </PageSubtitle>
      <SearchBar />
    </Section>
  );
};
