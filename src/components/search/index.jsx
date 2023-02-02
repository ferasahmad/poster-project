import { Container, Input, Button, Image } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAlbums } from "../../api";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleOnClick = async () => {
    if (!search) return;

    const albums = await returnGetAlbums();
    navigate("/create", { state: { albums } });
  };

  const returnGetAlbums = async () => {
    try {
      const albums = await getAlbums(search);
      return albums;
    } catch (error) {
      console.log(error);
    }
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
