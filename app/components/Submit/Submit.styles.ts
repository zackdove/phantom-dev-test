"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(255, 0, 255, 0.8);
  border-radius: 8px;
  width: 30em;
  max-width: 90vw;
  padding: 16px;
  form {
    overflow: hidden;
  }
  label {
    display: block;
    padding-bottom: 10px;
    input {
      display: block;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      border: none;
      font-size: 1rem;
      margin-top: 4px;
      padding: 8px 8px;
      border-radius: 4px;
    }
  }
  input[type="submit"] {
    float: right;
    background-color: rgba(255, 0, 255, 0.8);
    border-radius: 4px;
    border: none;
    padding: 4px 16px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
  }
`;
