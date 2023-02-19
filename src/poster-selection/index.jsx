import { useEffect, useState } from "react";
import Header from "../components/header";
import {
  Container,
  AlbumAndPostersContainer,
  AlbumContainer,
  PostersContainer,
  Poster,
  AlbumCover,
  InfoContainer,
  Info,
} from "./styles";
import Search from "../components/search";
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

      console.log("data");
      console.log(data);

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
        <AlbumContainer>
          <AlbumCover src={album.image[3]["#text"]} alt="album" />
          <InfoContainer>
            <Info>{album.name}</Info>
            <Info>{album.artist}</Info>
          </InfoContainer>
        </AlbumContainer>
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
