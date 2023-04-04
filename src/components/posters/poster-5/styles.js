import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25px 25px 0 25px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #660000 0%, rgba(0, 0, 0, 0) 100%);
  font-family: OpenSans;
`;

export const Cover = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

export const AlbumName = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  margin: 10px 0 5px 0;
`;

export const AlbumInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 9px;

  p {
    margin: 0;
    font-weight: 300;
    width: fit-content;
    height: fit-content;
  }

  span {
    width: 100%;
    font-weight: 400;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

export const PlayIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const TracksContainer = styled.div`
  padding: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 5px;
  column-gap: 10px;
  height: 150px;
`;

export const Track = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: 6px;
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  margin-left: 5px;
  width: fit-content;

  h2 {
    margin: 0;
    font-size: 7px;
    color: #999999;
    font-weight: 400;
  }

  p {
    margin: 0;
    font-size: 7px;
  }
`;

export const Controls = styled.div`
  gap: 10px;
`;

export const NowPlaying = styled.div`
  display: flex;
  background-color: #660000;
  align-items: center;
  justify-content: space-between;
  padding: 6px 13px;
  width: 95%;
  border-radius: 8px;
  z-index: 3;

  div {
    display: flex;
  }
`;

export const AlbumCover = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 5px;
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background: linear-gradient(transparent, black);
  bottom: 0;
  z-index: 2;
`;
