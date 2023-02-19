import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: url("./background-2.svg");
  background-size: cover;
  flex-direction: column;
  height: 100%;
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

export const AlbumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 741px;
  height: 254px;
  filter: drop-shadow(0px 0px 15px #ffffff);
  border-radius: 148.5px;
  background: #000000;
  margin-bottom: 70px;
`;

export const AlbumCover = styled.img`
  width: 212px;
  height: 212px;
  filter: drop-shadow(0px 0px 5px #0d3700);
  border-radius: 10px;
  margin-right: 78px;
`;

export const InfoContainer = styled.div`
  font-family: DaysOne;
  font-size: 15px;
`;

export const Info = styled.p``;

export const PostersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 67px;
`;

export const Poster = styled.div`
  width: 163px;
  height: 223px;
  background: #000000;
  box-shadow: 0px 0px 15px #0d3700;
  border-radius: 10px;
`;
