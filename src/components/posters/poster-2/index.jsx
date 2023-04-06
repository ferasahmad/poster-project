import {
  Container,
  Albumname,
  AlbumInfoContainer,
  AlbumInfo,
  ArtistName,
} from "./styles";
import PosterWrapper from "../../poster-wrapper";

const Poster2 = ({ album }) => {
  console.log("poster");
  console.log(album);

  return (
    <PosterWrapper>
      <Container>
        <Albumname>{album.name}</Albumname>
        <AlbumInfoContainer>
          <AlbumInfo>
            <ArtistName>{album.artist}</ArtistName> •{" "}
            {album.tracks && album.tracks.length}
          </AlbumInfo>
        </AlbumInfoContainer>
      </Container>
    </PosterWrapper>
  );
};

export default Poster2;
