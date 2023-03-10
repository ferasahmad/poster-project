import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: url("./assets/create-background.svg");
  background-size: cover;
  flex-direction: column;
  height: 100%;
`;

export const AlbumsContainer = styled.div`
  display: flex;
  background: #001600;
  width: 1000px;
  margin: 50px 193px;
  padding: 50px;
  border: 3px solid #ffffff;
  gap: 33px;
  overflow-x: scroll;
`;

export const NoResults = styled.p`
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  font-size: 24px;
  font-family: DaysOne;
`;
