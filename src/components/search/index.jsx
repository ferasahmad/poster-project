import { Container, Input, Button, Image } from "./styles";

const Search = ({ value, onChange, onClick, autoFocus }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onClick();
    }
  };

  return (
    <Container>
      <Button onClick={onClick}>
        <Image src={"./assets/search-icon.svg"} alt="" />
      </Button>
      <Input
        autoFocus={autoFocus}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </Container>
  );
};

export default Search;
