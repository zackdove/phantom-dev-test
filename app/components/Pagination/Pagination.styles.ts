import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Number = styled(Link)<{ $isDisabled?: boolean }>`
  background-color: rgba(255, 255, 255, 0.6);
  height: 2em;
  min-width: 2em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isDisabled ? 0.6 : 0.9)};
  pointer-events: ${(props) => (props.$isDisabled ? "none" : "all")};
  &:hover {
    opacity: 1;
  }
`;

export const Arrow = styled(Link)<{ $isDisabled?: boolean }>`
  height: 2em;
  min-width: 2em;
  color: rgba(4, 0, 4, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isDisabled ? 0.2 : 0.9)};
  pointer-events: ${(props) => (props.$isDisabled ? "none" : "all")};
  :hover {
    opacity: 1;
  }
`;
