import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    background-color: rgba(255, 0, 255, 0.8);
    border-radius: 8px;
    width: 40em;
    max-width: 90vw;
    padding: 16px;
    h1 {
      margin-bottom: 16px;
    }
    div {
      margin-bottom: 16px;
    }
  }
`;

export const Button = styled.div`
  float: right;
  background-color: rgba(255, 0, 255, 0.8);
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;
