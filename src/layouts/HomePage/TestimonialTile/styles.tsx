import styled, { keyframes } from "styled-components";
import { Description, HeaderTitle, PageTile, SectionHeader } from "../styles";

export const Wrapper = styled(PageTile)`
  padding-bottom: 150px;
  margin-top: 168px;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  max-width: 271px;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 50%;
  @media only screen and (min-width: 767px) {
    max-width: 471px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 53px;

  @media only screen and (min-width: 767px) {
    margin-bottom: unset;
    max-width: 464px;
    max-height: 464px;
    width: 100%;
    flex: 1;
  }
`;

export const Title = styled(SectionHeader)`
  display: flex;
  justify-content: center;
`;

export const Subtitle = styled(HeaderTitle)`
  padding: 25px 0 42px 0;
`;

export const Testimony = styled(Description)`
  margin-bottom: 36px;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 767px) {
    flex-direction: row;
    gap: 45px;
    text-align: left;
    width: 100%;
  }
`;

export const Name = styled.div`
  color: #332d3b;

  /* font-family: Space Grotesk; */
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 27.2px */
`;

export const JobTitle = styled.a`
  color: #332d3b;
  /* font-family: Manrope; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 27.2px */
  opacity: 0.5;
`;
export const PersonDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DetailsWrapper = styled.div`
  @media only screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;

    width: 350px;
    flex-shrink: 0;
  }
`;

export const QuoteGraphicWrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 0px;
  width: 60px;
  aspect-ratio: 1;
  @media only screen and (min-width: 767px) {
    max-width: 92px;
    width: 100%;
    left: 20px;
  }
  @media only screen and (min-width: 1024px) {
    width: 92px;
    left: 20px;
  }
`;
