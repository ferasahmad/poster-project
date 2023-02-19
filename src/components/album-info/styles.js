import styled from "styled-components";

export const Container = styled.div`
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

export const Album = styled.div`
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
  display: flex;
  flex-direction: column;
  font-family: DaysOne;
  font-size: 15px;
  gap: 25px;
`;

export const Icon = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 24px;
`;

export const Info = styled.div`
  display: flex;
  width: 212px;
`;

export const InfoText = styled.p`
  margin: 0;
`;
