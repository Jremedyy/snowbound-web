import styled from "styled-components";
import { PageTile, HeaderTitle, Description } from "../styles";

export const DontKnowWhereToStartWrapper = styled(PageTile)`
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;

  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
  }
`;

export const PolygonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: -215px;
  z-index: 1;
  /* overflow: hidden; */
`;

export const DetailsWrapper = styled.div`
  z-index: 4;
  padding: 0 20px 0 20px;
  max-width: 550px;
  align-self: center;
  @media only screen and (min-width: 767px) {
    max-width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 180px;
  }
`;

export const Benefits = styled.div`
  position: relative;
  z-index: 6;
  color: #8155ba;
  text-align: center;
  /* font-family: Space Grotesk; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 23.8px */
  letter-spacing: 2.59px;
  text-transform: uppercase;
  margin-top: 218px;
`;

export const BenefitsTitle = styled(HeaderTitle)`
  width: 100%;
  position: relative;
  z-index: 5;
  color: #332d3b;
  text-align: center;
  /* font-family: Space Grotesk; */
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 119%; /* 38.08px */
  padding: 21px 0;
`;

export const BenefitDetails = styled(Description)`
  position: relative;
  text-align: center;
  z-index: 5;
  margin-bottom: 29px;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  z-index: 4;
  margin-top: 80px;
  @media only screen and (min-width: 767px) {
    padding: 0 180px;
  }
`;

export const ButtonWrapper = styled.div`
  @media only screen and (min-width: 767px) {
    width: 210px;
  }
`;
