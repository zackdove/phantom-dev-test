"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(255, 0, 255, 0.8);
  border-radius: 8px;
  width: 30em;
  max-width: 90vw;
  padding: 16px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 16px 0;
    /* max-height: 400px; */
    overflow-y: scroll;
  }
`;

export const Bookmark = styled.li`
  border-radius: 4px;
  margin: 8px 0;
  padding: 6px 16px;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 0, 255, 1);
  }
`;

export const Table = styled.table`
  /* background-color: rgba(255, 0, 255, 1); */
  border-spacing: 0;
  th {
    text-transform: uppercase;
    opacity: 0.6;
    padding-bottom: 16px;
  }
`;

export const PopupWrapper = styled.div<{ $active?: boolean }>`
  position: fixed;
  transition: opacity 0.3s;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  pointer-events: ${(props) => (props.$active ? "all" : "none")};
`;

export const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  cursor: pointer;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Popup = styled.div`
  position: fixed;
  background-color: rgba(255, 0, 255, 1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30em;
  max-width: 85vw;
  border-radius: 8px;
  padding: 32px 16px;
  div:not(:last-child) {
    padding-bottom: 16px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
