import { useEffect, useState } from "react";
import Header from "../components/header";
import {
  Container,
  AlbumAndPostersContainer,
  PostersContainer,
  Poster,
} from "./styles";
import Search from "../components/search";
import AlbumInfo from "../components/album-info";
import { getAlbum } from "../api";

const PosterSelection = () => {
  const artist = new URLSearchParams(window.location.search).get("artist");
  const albumName = new URLSearchParams(window.location.search).get(
    "albumName"
  );

  const [album, setAlbum] = useState({});

  useEffect(() => {
    if (!artist && !albumName) return;

    handleGetAlbum();
  }, []);

  const handleGetAlbum = async () => {
    try {
      const data = await getAlbum(artist, albumName);

      setAlbum(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header />
      <Search />
      <AlbumAndPostersContainer>
        <AlbumInfo album={album} />
        <PostersContainer>
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </PostersContainer>
      </AlbumAndPostersContainer>
    </Container>
  );
};

export default PosterSelection;
