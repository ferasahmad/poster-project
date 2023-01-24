import { Container, Image, P, Button } from "./styles";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <Image src="/title.svg" alt="" />
      <P>Create a poster of your favorite artist!</P>
      <Link to="/create">
        <Button>GET STARTED</Button>
      </Link>
    </Container>
  );
};

export default Main;
