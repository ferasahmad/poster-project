import { Container, Input, Button, Image } from "./styles";

const Search = ({ value, onChange, onClick }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onClick();
    }
  };

  return (
    <Container>
      <Button onClick={onClick}>
        <Image src={"./search-icon.svg"} alt="" />
      </Button>
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </Container>
  );
};

export default Search;
