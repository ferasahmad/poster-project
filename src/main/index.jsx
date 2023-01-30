import { Container, P, DescriptionAndSearch } from "./styles";
import Search from "../components/search";

const Main = () => {
  return (
    <Container>
      <div></div>
      <div></div>
      <div></div>
      <DescriptionAndSearch>
        <P>Create a poster of your favorite artist!</P>
        <Search />
      </DescriptionAndSearch>
    </Container>
  );
};

export default Main;
