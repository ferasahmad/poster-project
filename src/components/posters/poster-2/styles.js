import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("./assets/posters/poster2/poster-2-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: BioRhyme;
  color: black;
`;

export const AlbumInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  h1 {
    text-align: center;
    margin: 0;
    font-size: 30px;
    text-transform: uppercase;
    font-family: AbhayaLibre;
    color: #a80000;
  }

  h2 {
    margin: 0;
    letter-spacing: 1px;
    font-weight: 400;
    font-family: SixCaps;
    color: #a80000;
  }
`;

export const TracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 35px;
`;

export const Track = styled.div`
  font-size: 9px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

export const TrackNumber = styled.p`
  text-align: center;
  width: 30px;
`;

export const TrackName = styled.p`
  width: 200px;
`;

export const TrackDuration = styled.p`
  width: 30px;
  text-align: center;
`;

export const ReleaseDateAndTotal = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    padding: 0 35px;
    justify-content: space-between;
  }
  p {
    margin: 0;
    font-size: 9px;
  }
`;

export const Stars = styled.p`
  margin: 0;
  height: 15px;
`;
