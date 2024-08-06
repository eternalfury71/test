import { Container } from "../../app/styles/styled";
import { HeroUi } from "./hero-ui/hero";
import { Navbar } from "./navbar/navbar";
import { Search } from "./search/search";

export function Hero() {
  return (
    <Container>
      <Navbar />
      <HeroUi />
      <Search />
    </Container>
  );
}
