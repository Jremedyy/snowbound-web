import styled from "styled-components";
import { PageTile, HeaderTitle, Description } from "../styles";

export const BoostYourSuccessWrapper = styled(PageTile)`
  position: relative;
  width: 100%;
  padding: 0;
  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
  }
`;

export const PolygonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: -255px;
  z-index: 1;
  @media only screen and (min-width: 767px) {
    top: -80px;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 0 20px 0 20px;
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
  margin-top: 200px;
  @media only screen and (min-width: 767px) {
    margin-top: 350px;
  }
`;

export const BenefitsTitle = styled(HeaderTitle)`
  width: 100%;
  position: relative;
  z-index: 5;
  text-align: center;
  padding: 25px 0;
`;

export const BenefitDetails = styled(Description)`
  position: relative;
  text-align: center;
  z-index: 5;
  opacity: 1;
`;
