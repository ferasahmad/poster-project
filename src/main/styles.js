import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url("./background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
  font-family: DaysOne;
`;

export const ImageAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 463px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 65px;
  z-index: 2;
  text-shadow: 0px -4px 3px #ffffff;
  letter-spacing: 0.02em;
  color: #8278b3;
  margin-top: 100px;
`;

export const Placeholder = styled.div`
  height: 100px;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  height: 463px;
  width: 463px;
`;

export const P = styled.p`
  font-size: 15px;
  margin: 36px 0;
`;

export const Button = styled.button`
  font-size: 15px;
  font-family: DaysOne;
  color: #7b61ff;
  height: 39px;
  width: 186px;
  border: 3px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 1px #7241ff;
  cursor: pointer;
  background: transparent;
`;
