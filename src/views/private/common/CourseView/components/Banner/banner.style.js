import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url(${({ path }) => path});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bg = styled.div`
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 1;
`;

export const BannerContent = styled.div`
  padding: 1rem;
  position: relative;
  z-index: 2;
`;
