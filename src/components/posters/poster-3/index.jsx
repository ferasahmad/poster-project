import { Container, AlbumInfo, Tracks } from "./styles";
import PosterWrapper from "../../poster-wrapper";
import returnTracks from "../../../utilities/returnTracks";

const Poster2 = ({ album }) => {
  return (
    <PosterWrapper>
      <Container>
        <AlbumInfo>
          <h1>{album.name}</h1>
          <h2>{album.artist}</h2>
        </AlbumInfo>
        <img src={"/assets/posters/poster3/cassete.svg"} />
        <Tracks>{returnTracks(album.tracks)}</Tracks>
      </Container>
    </PosterWrapper>
  );
};

export default Poster2;
