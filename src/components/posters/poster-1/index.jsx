import { Container, TracksContainer, Cover } from "./styles";
import PosterWrapper from "../../poster-wrapper";

const Poster1 = ({ album }) => {
  console.log(album);

  const returnTracks = (tracks) => {
    if (!tracks) return;

    return tracks.map((track) => <p key={track.id}>{track.name}• </p>);
  };

  return (
    <PosterWrapper>
      <Container>
        <Cover src={album.image} alt="" />
        <TracksContainer>{returnTracks(album.tracks)}</TracksContainer>
        <hr />
        <div>
          <img />
          <img />
          <img />
        </div>
      </Container>
    </PosterWrapper>
  );
};

export default Poster1;
