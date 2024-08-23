import styled from "styled-components";
import { PageTile } from "../styles";
import { Description } from "../styles";

export const FeelingLostWrapper = styled(PageTile)`
  justify-content: center;
  align-items: center;
  padding-top: 185px;
  margin-bottom: 85px;
  gap: 25px;

  @media only screen and (min-width: 767px) {
    flex-direction: row;
    gap: 131px;
  }

  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
    max-width: 1220px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 49px;
  @media only screen and (min-width: 767px) {
    height: 265px;
    max-width: 400px;
    width: 100%;
    flex-shrink: unset;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 306px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.09);
  @media only screen and (min-width: 767px) {
    max-width: 440px;
    height: 100%;
  }
`;

export const QuestionGraphicWrapper = styled.div`
  position: absolute;
  width: 68px;
  top: -35px;
  right: 100px;
  @media only screen and (min-width: 767px) {
    left: calc(100% - 150px);
  }
`;

export const DescriptionWrapper = styled.div`
  @media only screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 25px;
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 655px;
  }
`;

export const SectionHeader = styled.div`
  width: 100%;
  text-align: left;
  color: #8155ba;
  /* font-family: Space Grotesk; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 23.8px */
  letter-spacing: 2.59px;
  text-transform: uppercase;
`;

export const HeaderTitle = styled.div`
  width: 100%;
  color: #332d3b;
  /* font-family: Space Grotesk; */
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 119%; /* 38.08px */
  text-align: left;
`;

export { Description };
