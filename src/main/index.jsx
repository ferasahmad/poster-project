import { Container, P, DescriptionAndSearch } from "./styles";
import Search from "../components/search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onClickSearchButton = () => {
    if (!search) return;

    navigate("/create?search=" + search);
  };

  return (
    <Container>
      <DescriptionAndSearch>
        <P>Create a poster of your favorite artist!</P>
        <Search
          value={search}
          onChange={setSearch}
          onClick={onClickSearchButton}
        />
      </DescriptionAndSearch>
    </Container>
  );
};

export default Main;
