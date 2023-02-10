import { Container, Input, Button, Image } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleOnClick = async () => {
    if (!search) return;

    navigate("/create?search=" + search);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleOnClick();
    }
  };

  return (
    <Container>
      <Button onClick={handleOnClick}>
        <Image src={"./search-icon.svg"} alt="" />
      </Button>
      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </Container>
  );
};

export default Search;
