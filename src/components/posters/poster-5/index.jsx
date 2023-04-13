import {
  Container,
  Cover,
  AlbumName,
  AlbumInfoContainer,
  IconsContainer,
  Icon,
  TracksContainer,
  Track,
  Controls,
  NowPlaying,
  AlbumCover,
  TrackInfo,
  PlayIcon,
  Gradient,
} from "./styles";
import PosterWrapper from "../../poster-wrapper";

const Poster5 = ({ album }) => {
  return (
    <PosterWrapper>
      <Container>
        <Cover src={album.image} />
        <AlbumName>{album.name}</AlbumName>
        <AlbumInfoContainer>
          <p>
            <span>{album.artist}</span> •{" "}
            {/* {new Date(album.releaseDate).getFullYear()} •{" "} */}
            {album.tracks && album.tracks.length}
          </p>
        </AlbumInfoContainer>
        <IconsContainer>
          <div>
            <Icon src={"./assets/posters/poster1/heart.svg"} />
            <Icon src={"./assets/posters/poster1/download.svg"} />
            <Icon src={"./assets/posters/poster1/dots.svg"} />
          </div>
          <div>
            <Icon src={"./assets/posters/poster1/shuffle.svg"} />
            <PlayIcon src={"./assets/posters/poster1/play.svg"} />
          </div>
        </IconsContainer>
        <TracksContainer>
          {album.tracks &&
            album.tracks.map((track) => (
              <Track key={track.name}>
                <p>{track.name}</p>
                <img src={"./assets/posters/poster1/heart.svg"} alt="" />
              </Track>
            ))}
        </TracksContainer>
        <NowPlaying>
          <div>
            <AlbumCover src={album.image} />
            <TrackInfo>
              <p>{album.tracks && album.tracks[0].name}</p>
              <h2>{album.artist}</h2>
            </TrackInfo>
          </div>
          <Controls>
            <Icon src={"./assets/posters/poster1/device.svg"} />
            <Icon src={"./assets/posters/poster1/pause.svg"} />
          </Controls>
        </NowPlaying>
        <Gradient />
      </Container>
    </PosterWrapper>
  );
};

export default Poster5;
