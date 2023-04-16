import { PageSubtitle } from "../components/Styles/PageSubtitle";
import { PageTitle } from "../components/Styles/PageTitle";
import { Section } from "../components/Styles/Section";
import { SearchBar } from "../components/SearchBar";
export const HomeView = () => {
  return (
    <Section>
      <PageTitle variant="large" colorVariant="black">
        Owca Tracker tf tf
      </PageTitle>
      <PageSubtitle variant="medium" colorVariant="black">
        League tracker provides insight to League of Legends players about their
        game performance, match history,
        <br /> and ranked ladder via Riot API.
      </PageSubtitle>
      <SearchBar />
    </Section>
  );
};