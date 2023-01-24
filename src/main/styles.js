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
  font-family: DaysOne;
  z-index: 2;
  text-shadow: 0px -4px 3px #ffffff;
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
  font-family: DaysOne;
  font-size: 15px;
  margin: 36px 0;
`;

export const Button = styled.button`
  font-size: 15px;
  font-family: DaysOne;
  height: 39px;
  width: 186px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0px 0px 11px 5px #a19bbb, inset 0px 0px 0px 4px #000000;
  cursor: pointer;
`;
