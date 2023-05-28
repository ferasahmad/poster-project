import { Container } from "./styles";
import PosterWrapper from "../../poster-wrapper";

const Poster1 = ({ album }) => {
  console.log(album);
  return (
    <PosterWrapper>
      <Container>
        <h1>{album.name}</h1>
        <img src={album.image} alt="" />
        <div>
          <h2></h2>
          <hr />
        </div>
        <p></p>
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
