import { PageSubtitle } from "../components/Text Styles/PageSubtitle";
import { PageTitle } from "../components/Text Styles/PageTitle";
import { Section } from "../components/Section";
import { SearchBar } from "../components/SearchBar";
export const HomeView = () => {
  return (
    <Section>
        <PageTitle variant="large" colorVariant="black">
          The successor to OPGG
        </PageTitle>
        <PageSubtitle variant="medium" colorVariant="black">
          Used by some of the world's largest companies, Next.js enables you to
          create full-stack web applications by extending the latest React
          features, and integrating powerful Rust-based JavaScript tooling for
          the fastest builds.
        </PageSubtitle>
        <SearchBar/>
    </Section>
  );
};
