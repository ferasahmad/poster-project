import Header from "../components/header";
import { Container, AlbumsContainer } from "./styles";
import Album from "../components/album";
import Search from "../components/search";
import { useEffect, useState } from "react";
import { getAlbums } from "../api";

const Create = () => {
  const [albums, setAlbums] = useState([]);
  const search = new URLSearchParams(window.location.search).get("search");

  useEffect(() => {
    if (!search) return;

    handleGetAlbums(search);
  }, []);

  const handleGetAlbums = async (search) => {
    try {
      const albums = await getAlbums(search);

      setAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  };

  const returnAlbums = () => {
    return albums.map((albumInfo) => (
      <Album key={albumInfo.name} info={albumInfo} />
    ));
  };

  return (
    <Container>
      <Header />
      <Search />
      <AlbumsContainer>
        {albums.length !== 0 ? returnAlbums() : <p>No results.</p>}
      </AlbumsContainer>
    </Container>
  );
};

export default Create;
