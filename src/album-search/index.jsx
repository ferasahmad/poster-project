import Header from "../components/header";
import { Container, AlbumsContainer, NoResults } from "./styles";
import AlbumButton from "../components/album-button";
import Search from "../components/search";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbums } from "../api";

const AlbumSearch = () => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const searchQueryParam = new URLSearchParams(window.location.search).get(
    "search"
  );
  const [search, setSearch] = useState(searchQueryParam);

  useEffect(() => {
    if (!search) return;

    handleGetAlbums();
  }, []);

  const handleGetAlbums = async () => {
    try {
      const data = await getAlbums(search);

      setAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };

  const returnAlbums = () => {
    return albums.map((albumInfo) => {
      if (!albumInfo.image) {
        return <></>;
      }

      return (
        <AlbumButton
          onClick={() =>
            navigate(
              `/poster-selection?albumName=${albumInfo.name}&artist=${albumInfo.artist}`
            )
          }
          key={albumInfo.name}
          info={albumInfo}
        />
      );
    });
  };

  const onClickSearchButton = () => {
    if (!search) return;

    setAlbums([]);
    navigate("/album-search?search=" + search);
    handleGetAlbums();
  };

  return (
    <Container>
      <Header />
      <Search
        value={search}
        onChange={setSearch}
        onClick={onClickSearchButton}
      />
      <AlbumsContainer>
        {albums.length !== 0 ? (
          returnAlbums()
        ) : (
          <NoResults>No results</NoResults>
        )}
      </AlbumsContainer>
    </Container>
  );
};

export default AlbumSearch;
