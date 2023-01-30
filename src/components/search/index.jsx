import { Container, Input, Button, Image } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    if (!search) return;

    navigate("/create");
  };

  return (
    <Container>
      <Button onClick={handleOnClick}>
        <Image src={"./search-icon.svg"} alt="" />
      </Button>
      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </Container>
  );
};

export default Search;
