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
  justify-content: center;
  background: #001600;
  flex-wrap: wrap;
  width: 1000px;
  height: fit-content;
  margin: 50px 193px;
  padding: 50px;
  border: 3px solid #ffffff;
  gap: 50px;
`;

export const NoResults = styled.p`
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  font-size: 24px;
  font-family: DaysOne;
`;
