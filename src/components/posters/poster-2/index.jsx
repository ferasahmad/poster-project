import {
  Container,
  TracksContainer,
  Track,
  AlbumInfoContainer,
  TrackName,
  TrackNumber,
  TrackDuration,
  ReleaseDateAndTotal,
  Stars,
} from "./styles";
import PosterWrapper from "../../poster-wrapper";

const Poster2 = ({ album }) => {
  const albumTracks = album.tracks && album.tracks.slice(0, 20);

  const formatTrackDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const getAlbumDuration = () => {
    let totalDuration = 0;
    album.tracks &&
      album.tracks.forEach((track) => {
        totalDuration += track.duration;
      });
    return formatTrackDuration(totalDuration);
  };

  return (
    <PosterWrapper>
      <Container>
        <AlbumInfoContainer>
          <h1>{album.name}</h1>
          <h2>{album.artist}</h2>
        </AlbumInfoContainer>
        <TracksContainer>
          <Track>
            <TrackNumber>QTY</TrackNumber>
            <TrackName>ITEM</TrackName>
            <TrackDuration>AMT</TrackDuration>
          </Track>
          {albumTracks &&
            albumTracks.map((track) => (
              <Track key={track.id}>
                <TrackNumber>{albumTracks.indexOf(track) + 1}</TrackNumber>
                <TrackName>{track.name}</TrackName>
                <TrackDuration>
                  {formatTrackDuration(track.duration)}
                </TrackDuration>
              </Track>
            ))}
          <ReleaseDateAndTotal>
            <Stars>
              * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            </Stars>
            {/* <p>DATE: {album.releaseDate}</p> */}
            <p>TOTAL: {getAlbumDuration()}</p>
            <Stars>
              * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            </Stars>
          </ReleaseDateAndTotal>
        </TracksContainer>
      </Container>
    </PosterWrapper>
  );
};

export default Poster2;
