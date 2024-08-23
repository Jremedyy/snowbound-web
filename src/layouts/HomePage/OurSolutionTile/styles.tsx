import styled from "styled-components";
import { PageTile } from "../styles";

export const WhereWeComeInWrapper = styled(PageTile)`
  gap: 25px;
  @media only screen and (min-width: 767px) {
    padding-right: 0px;
  }
`;

export const ServicesSection = styled(PageTile)`
  margin-top: 65px;
  display: flex;
  gap: 40px;
  @media only screen and (min-width: 767px) {
    padding-left: 0px;
    margin-top: 0;
  }
`;

export const ServiceTitle = styled.div`
  display: flex;
  flex-direction: row;
  color: #332d3b;
  /* font-family: Space Grotesk; */
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 119%; /* 21.42px */
  gap: 11px;
  margin-bottom: 17px;
`;

export const TitleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  z-index: 3;
`;

export const Wrapper = styled(PageTile)`
  padding: 0;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
    gap: 130px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
    padding: 0 20px;
  }
`;

export const ButtonWrapper = styled.div`
  @media only screen and (min-width: 767px) {
    width: 155px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
  }
`;
