import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
  font-size: 17px;
  margin: 0;
`;

export const AlbumInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const ArtistPhoto = styled.img`
  border-radius: 50%;
  background: white;
  width: 20px;
  height: 20px;
`;

export const ArtistName = styled.span`
  width: 100%;
  font-weight: 600;
  font-size: 8px;
`;

export const AlbumInfo = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 9px;
  width: fit-content;
  height: fit-content;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    gap: 10px;
  }
`;

export const Icon = styled.img`
  width: 13px;
  height: 13px;
`;

export const HeartIcon = styled.img`
  width: 9px;
  height: 9px;
`;

export const TrackName = styled.p`
  font-size: 6px;
`;

export const TracksContainer = styled.div`
  padding: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  height: 150px;
`;

export const Track = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TrackInfo = styled.div``;

export const Controls = styled.div``;

export const NowPlaying = styled.div`
  display: flex;
  background-color: #660000;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  width: 95%;
  border-radius: 8px;

  div {
    display: flex;
    background-color: purple;
  }
`;

export const AlbumCover = styled.img`
  height: 20px;
  width: 20px;
`;
