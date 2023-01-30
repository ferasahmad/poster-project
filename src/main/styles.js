import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background-image: url("./background-updated.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  font-family: DaysOne;
`;

export const Placeholder = styled.div`
  height: 100px;
`;

export const P = styled.p`
  font-size: 15px;
  margin: 36px 0;
`;

export const DescriptionAndSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
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
