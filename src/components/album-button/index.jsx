import { Button, Title, Cover } from "./styles";

const AlbumButton = ({ info, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Cover key={info.name} src={info.image} alt="" />
      <Title>{info.name}</Title>
    </Button>
  );
};

export default AlbumButton;
