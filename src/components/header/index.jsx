import { HeaderContainer, Logo, Button } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <HeaderContainer>
      <Button onClick={onClick}>
        <Logo src="./assets/logo-with-text.svg" />
      </Button>
    </HeaderContainer>
  );
};

export default Header;
