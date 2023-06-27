import styled from "styled-components";

export const Container = styled.div`
  margin: 30px;
  border-radius: 15px;
  border: 2px solid #a80000;
  height: 80%;
  box-shadow: 0px 0px 4px 3px #a80000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  img {
    width: 170px;
    height: 170px;
  }
`;

export const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin: 0;
    font-size: 20px;
    text-transform: uppercase;
    font-family: AbhayaLibre;
    color: white;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 400;
    font-family: SixCaps;
    color: #a80000;
  }
`;

export const Tracks = styled.div`
  font-size: 16px;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  font-family: TulpenOne;
`;
