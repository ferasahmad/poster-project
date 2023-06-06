import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 20px;

  h1 {
    font-size: 24px;
    font-family: Bokor;
    line-height: 35px;
    margin: 10px 0 10px 0;
    white-space: nowrap;
    overflow: hidden;
    max-width: 30ch;
    text-overflow: ellipsis;
  }

  hr {
    border-width: 0.5px;
    border-style: solid;
    width: 100%;
    background-color: white;
    margin: 20px 0 20px 0;
  }

  p {
    line-height: 20px;
    margin: 0;
  }
`;

export const Cover = styled.img`
  width: 220px;
  height: 220px;
`;

export const Bottom = styled.img`
  width: 100%;
`;

export const ArtistContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    font-family: Bokor;
    margin: 0;
    margin-right: 20px;
    white-space: nowrap;
  }
`;

export const TracksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: TulpenOne;
  text-align: justify;
  line-spacing: 0.02em;
`;

export const ArtistNameContainer = styled.div`
  background-color: #1db954;
  display: flex;
  flex-direction: row;
  width: 100%;

  h2 {
    margin: 0;
  }
`;
