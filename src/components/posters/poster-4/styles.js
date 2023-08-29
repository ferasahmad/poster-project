import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0;
  background: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-family: AbhayaLibre;
    color: white;
    font-size: 20px;
    z-index: 1;
    margin: 0;
    width: 100px;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    display: flex;
    z-index: 1;
    justify-content: center;
    margin: 0;
    font-family: sixCaps;
    font-size: 25px;
    color: red;
  }
`;

export const Asset = styled.img`
  width: 100%;
  position: absolute;
  z-index: 0;
`;

export const AlbumCover = styled.img`
  position: absolute;
  opacity: 0.2;
  height: 430px;
  width: 430px;
  border-radius: 50%;
`;

export const Circle = styled.div`
  position: absolute;
  display: flex;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background: black;
  z-index: 0;
`;
