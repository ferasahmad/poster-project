import { useEffect, useState } from "react";
import Header from "../components/header";
import {
  Container,
  AlbumAndPostersContainer,
  PostersContainer,
  LoadingContainer,
} from "./styles";
import Search from "../components/search";
import { useNavigate } from "react-router-dom";
import AlbumInfo from "../components/album-info";
import { getAlbum } from "../api";
import Poster1 from "../components/posters/poster-1";
import Poster2 from "../components/posters/poster-2";
import Poster3 from "../components/posters/poster-3";
import Poster4 from "../components/posters/poster-4";
import Poster5 from "../components/posters/poster-5";

import { Rings } from "react-loader-spinner";

const PosterSelection = () => {
  const navigate = useNavigate();
  const artist = new URLSearchParams(window.location.search).get("artist");
  const albumName = new URLSearchParams(window.location.search).get(
    "albumName"
  );

  const [album, setAlbum] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const posters = [
    <Poster1 album={album} />,
    <Poster2 album={album} />,
    <Poster3 album={album} />,
    <Poster4 album={album} />,
    <Poster5 album={album} />,
  ];

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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      {loading ? (
        <LoadingContainer>
          <Rings
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            color="#7b61ff"
          />
        </LoadingContainer>
      ) : (
        <AlbumAndPostersContainer>
          <AlbumInfo album={album} />
          <PostersContainer>
            {posters.map((poster) => (
              <>{poster}</>
            ))}
          </PostersContainer>
        </AlbumAndPostersContainer>
      )}
    </Container>
  );
};

export default PosterSelection;
