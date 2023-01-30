import { Container, Input, Button, Image } from "./styles";

const Search = () => {
  return (
    <Container>
      <Button>
        <Image src={"./search-icon.svg"} alt="" />
      </Button>
      <Input />
    </Container>
  );
};

export default Search;
