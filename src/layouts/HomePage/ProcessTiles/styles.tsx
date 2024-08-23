import styled from "styled-components";
import { PageTile } from "../styles";

export const Wrapper = styled(PageTile)`
  margin-top: 126px;
  display: flex;
  gap: 83px;
  @media only screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 0;
  }
`;
export const ProcessTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 15;
  width: 100%;
  @media only screen and (min-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 3;
    flex-direction: row;
    justify-content: space-around;
    gap: 50px;
  }
`;

export const ReverseTileWrapper = styled(ProcessTileWrapper)`
  flex-direction: column-reverse;
  @media only screen and (min-width: 767px) {
    flex-direction: unset;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  max-width: 550px;
  height: 306px;
  flex-shrink: 0;
  margin-bottom: 33px;
  @media only screen and (min-width: 767px) {
    height: 265px;
    max-width: 400px;
    width: 100%;
    flex-shrink: unset;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  overflow: hidden;
`;
export const Header = styled.div`
  width: 100%;
  color: #332d3b;
  font-family: Space Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 119%;
  padding: 25px 0;
`;
export const Description = styled.div`
  width: 100%;
  color: #332d3b;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 27.2px */
  opacity: 0.6;
`;

export const Position = styled.div`
  color: #8155ba;
  /* font-family: Space Grotesk; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 23.8px */
  letter-spacing: 2.59px;
  text-transform: uppercase;
`;

export const DescriptionWrapper = styled.div`
  max-width: 550px;
  @media only screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
  }
`;
