import { Container, AlbumCover, Asset, Circle } from "./styles";
import PosterWrapper from "../../poster-wrapper";
import returnAlbumName from "../../../utilities/returnAlbumName";

const Poster4 = ({ album }) => {
  const returnText = () => {
    if (returnAlbumName(album.name, 40) === undefined) {
      return album.artist;
    } else {
      return returnAlbumName(album.name, 40);
    }
  };

  return (
    <PosterWrapper>
      <Container>
        <Asset src="./assets/posters/poster4/record.svg" />
        <Asset src="./assets/posters/poster4/circle.svg" />
        <AlbumCover src={album.image} />

        <h1>{returnText()}</h1>
        <Circle />
      </Container>
    </PosterWrapper>
  );
};

export default Poster4;
