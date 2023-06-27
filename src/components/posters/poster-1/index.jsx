import {
  Container,
  TracksContainer,
  Cover,
  Bottom,
  ArtistContainer,
} from "./styles";
import PosterWrapper from "../../poster-wrapper";
import returnAlbumName from "../../../utilities/returnAlbumName";
import returnTracks from "../../../utilities/returnTracks";

const Poster1 = ({ album }) => {
  return (
    <PosterWrapper>
      <Container>
        {returnAlbumName(album.name)}
        <Cover src={album.image} alt="" />
        <ArtistContainer>
          <h2>{album.artist}</h2>
          <hr />
        </ArtistContainer>
        <TracksContainer>{returnTracks(album.tracks)}</TracksContainer>
        <hr />
        <Bottom src={"/assets/posters/poster1/bottom.svg"} />
      </Container>
    </PosterWrapper>
  );
};

export default Poster1;
