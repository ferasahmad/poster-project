import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 463px;
  padding: 14px 24px;
  background: linear-gradient(0deg, rgba(34, 0, 75, 0.4), rgba(34, 0, 75, 0.4)),
    url(1.jpg);
  border: 2px solid #7b61ff;
  box-shadow: 0px 0px 16px -2px #7b61ff;
  border-radius: 34px;
`;

export const Input = styled.input`
  outline: none;
  background: transparent;
  font-family: DotGothic16;
  font-size: 20px;
  margin-left: 10px;
  width: 100%;
  border: none;
  color: white;
  height: 20px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  height: 20px;
  width: 20px;
`;

export const Image = styled.img`
  height: 20px;
  width: 20px;
`;
