"use client";

import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  gap: 32px;
`;

export const Logo = styled(Image)`
  object-fit: contain;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 16px;
`;
