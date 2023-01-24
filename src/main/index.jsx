import { Container, P, Button, DescriptionAndButton } from "./styles";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <div></div>
      <DescriptionAndButton>
        <P>Create a poster of your favorite artist!</P>
        <Link to="/create">
          <Button>GET STARTED</Button>
        </Link>
      </DescriptionAndButton>
    </Container>
  );
};

export default Main;
