import {
  Container,
  Cover,
  AlbumName,
  AlbumInfoContainer,
  ArtistPhoto,
  AlbumInfo,
  ArtistName,
  IconsContainer,
  Icon,
  TracksContainer,
  Track,
  TrackName,
  HeartIcon,
  Controls,
  NowPlaying,
  AlbumCover,
  TrackInfo,
} from "./styles";
import PosterWrapper from "../../poster-wrapper";

const Poster5 = ({ album }) => {
  console.log("poster");
  console.log(album);

  return (
    <PosterWrapper>
      <Container>
        <Cover src={album.image} />
        <AlbumName>{album.name}</AlbumName>
        <AlbumInfoContainer>
          <ArtistPhoto />
          <AlbumInfo>
            <ArtistName>{album.artist}</ArtistName> •{" "}
            {new Date(album.releaseDate).getFullYear()} •{" "}
            {album.tracks && album.tracks.length}
          </AlbumInfo>
        </AlbumInfoContainer>
        <IconsContainer>
          <div>
            <Icon src={"./assets/posters/poster1/heart.svg"} />
            <Icon src={"./assets/posters/poster1/download.svg"} />
            <Icon src={"./assets/posters/poster1/dots.svg"} />
          </div>
          <div>
            <Icon src={"./assets/posters/poster1/shuffle.svg"} />
            <Icon src={"./assets/posters/poster1/play.svg"} />
          </div>
        </IconsContainer>
        <TracksContainer>
          {album.tracks &&
            album.tracks.map((track) => (
              <Track key={track.name}>
                <TrackName>{track.name}</TrackName>
                <HeartIcon src={"./assets/posters/poster1/heart.svg"} />
              </Track>
            ))}
        </TracksContainer>
        <NowPlaying>
          <div>
            <AlbumCover src={album.cover} />
            <TrackInfo>
              <TrackName>{album.tracks && album.tracks[0].name}</TrackName>
              <ArtistName>{album.artist}</ArtistName>
            </TrackInfo>
          </div>
          <Controls>
            <Icon src={"./assets/posters/poster1/device.svg"} />
            <Icon src={"./assets/posters/poster1/pause.svg"} />
          </Controls>
        </NowPlaying>
      </Container>
    </PosterWrapper>
  );
};

export default Poster5;
