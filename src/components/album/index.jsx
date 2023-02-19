import { Button, Title, Cover } from "./styles";

const Album = ({ info, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Cover key={info.name} src={info.image[3]["#text"]} alt="" />
      <Title>{info.name}</Title>
    </Button>
  );
};

export default Album;
