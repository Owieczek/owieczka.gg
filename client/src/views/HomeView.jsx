import { Subtitle } from "../components/Core/Subtitle";
import { Title } from "../components/Core/Title";
import { Section } from "../components/Core/Section";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const HomeView = () => (
  <Section>
    <Title variant="large" colorVariant="black">
      Owca Tracker tf tf
    </Title>
    <Subtitle variant="medium" colorVariant="black">
      League tracker provides insight to League of Legends players about their
      game performance, match history,
      <br /> and ranked ladder via Riot API.
    </Subtitle>
    <SearchBar />
  </Section>
);
