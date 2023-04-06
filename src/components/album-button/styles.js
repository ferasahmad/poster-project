import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 161px;
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  color: #fff;
`;

export const Cover = styled.img`
  width: 161px;
  height: 161px;
`;

export const Title = styled.h1`
  margin-top: 25px;
  margin-bottom: 0;
  font-family: DaysOne;
  font-size: 15px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
