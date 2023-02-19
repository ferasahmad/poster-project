import { useEffect, useState } from "react";
import Header from "../components/header";
import {
  Container,
  AlbumAndPostersContainer,
  PostersContainer,
  Poster,
} from "./styles";
import Search from "../components/search";
import { useNavigate } from "react-router-dom";
import AlbumInfo from "../components/album-info";
import { getAlbum } from "../api";

const PosterSelection = () => {
  const navigate = useNavigate();
  const artist = new URLSearchParams(window.location.search).get("artist");
  const albumName = new URLSearchParams(window.location.search).get(
    "albumName"
  );

  const [album, setAlbum] = useState({});
  const [search, setSearch] = useState("");

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

  const onClickSearchButton = () => {
    if (!search) return;

    navigate("/album-search?search=" + search);
  };

  return (
    <Container>
      <Header />
      <Search
        value={search}
        onChange={setSearch}
        onClick={onClickSearchButton}
      />
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
