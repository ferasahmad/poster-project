import { useLocation } from "react-router-dom";
import Header from "../components/header";
import { Container, AlbumsContainer } from "./styles";
import Album from "../components/album";
import Search from "../components/search";

const Create = () => {
  const location = useLocation();
  const { albums } = location.state;

  console.log(albums);

  const returnAlbums = () => {
    return albums.map((albumInfo) => (
      <Album key={albumInfo.name} info={albumInfo} />
    ));
  };

  return (
    <Container>
      <Header />
      <Search />
      <AlbumsContainer>{returnAlbums()}</AlbumsContainer>
    </Container>
  );
};

export default Create;
