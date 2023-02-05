import { Container, Title, Cover } from "./styles";

const Album = ({ info }) => {
  return (
    <Container>
      <Cover key={info.name} src={info.image[3]["#text"]} alt="" />
      <Title>{info.name}</Title>
    </Container>
  );
};

export default Album;
