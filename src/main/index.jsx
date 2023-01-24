import {
  Container,
  ImageAndTitle,
  Image,
  Title,
  P,
  Button,
  Placeholder,
} from "./styles";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <ImageAndTitle>
        <Image src="/globe.svg" alt="" />
        <Placeholder />
        <Title>VINTAGE VISIONS</Title>
      </ImageAndTitle>
      <P>Create a poster of your favorite artist!</P>
      <Link to="/create">
        <Button>GET STARTED</Button>
      </Link>
    </Container>
  );
};

export default Main;
