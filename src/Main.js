import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ImageAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 463px;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 65px;
  font-family: DaysOne;
`;

const Image = styled.img`
  position: absolute;
  z-index: -1;
  height: 463px;
  width: 463px;
`;

const P = styled.p`
  font-family: DaysOne;
  font-size: 15px;
  margin: 36px 0;
`;

const Main = () => {
  return (
    <Container>
      <ImageAndTitle>
        <Image src="/globe.svg" alt="" />
        <H1>PROJECT NAME</H1>
      </ImageAndTitle>
      <P>Create a poster of your favorite artist!</P>
    </Container>
  );
};

export default Main;
