import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: url("./assets/background-2.svg");
  background-attachment: fixed;
  background-size: cover;
  flex-direction: column;
  height: 100%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  font-family: DaysOne;
`;

export const AlbumAndPostersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #001600;
  width: 1000px;
  margin: 50px 193px;
  padding: 70px;
  border: 3px solid #ffffff;
`;

export const AlbumCover = styled.img`
  width: 212px;
  height: 212px;
  filter: drop-shadow(0px 0px 5px #0d3700);
  border-radius: 10px;
  margin-right: 78px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: DaysOne;
  font-size: 15px;
  gap: 25px;
`;

export const PostersContainer = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  gap: 75px;
  flex-wrap: wrap;
`;
