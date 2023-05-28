import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h1 {
    font-size: 20px;
  }

  hr {
    border-style: solid;
    height: 2px;
    width: 100%;
    background-color: white;
  }

  p {
    line-height: 20px;
    margin: 0;
  }
`;

export const Cover = styled.img`
  width: 300px;
  height: 300px;
`;

export const TracksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
