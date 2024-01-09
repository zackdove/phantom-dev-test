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
