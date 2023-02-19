import {
  Container,
  AlbumCover,
  InfoContainer,
  Info,
  Icon,
  InfoText,
} from "./styles";

const AlbumInfo = ({ album }) => {
  return (
    <Container>
      <AlbumCover src={album.image && album.image[3]["#text"]} alt="album" />
      <InfoContainer>
        <Info>
          <Icon src="./album.svg" />
          <InfoText>{album.name}</InfoText>
        </Info>
        <Info>
          <Icon src="./artist.svg" />
          <InfoText>{album.artist}</InfoText>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default AlbumInfo;