import {
  Container,
  TracksContainer,
  Cover,
  Bottom,
  ArtistContainer,
} from "./styles";
import PosterWrapper from "../../poster-wrapper";

const Poster1 = ({ album }) => {
  const returnTracks = (tracks) => {
    if (!tracks) return;

    let tracksString = "";

    tracks.map((track) => {
      tracksString = tracksString + track.name + " • ";
    });

    return tracksString;
  };

  const returnAlbumName = (album) => {
    if (album && album.name.length < 30) return <h1>{album.name}</h1>;
  };

  return (
    <PosterWrapper>
      <Container>
        {returnAlbumName(album)}
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
