import styled from "styled-components";
import { HeaderTitle, PageTile, SectionHeader } from "../styles";
import { Description } from "../styles";

export const Wrapper = styled(PageTile)`
  background: #332d3b0a;
  padding-top: 110px;
  padding-bottom: 165px;
  @media only screen and (min-width: 767px) {
    align-items: center;
  }
`;

export const SizeWrapper = styled.div`
  @media only screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
  }
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 15px;
`;
export const ArticleTileTitle = styled(SectionHeader)`
  text-align: center;
`;

export const ArticleTileSubtitle = styled(HeaderTitle)`
  text-align: center;
  padding: 25px 0 25px 0;
`;

export { Description };

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
`;

export const Date = styled.div`
  color: #332d3b;
  /* font-family: Manrope; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 27.2px */
  opacity: 0.5;
`;

export const ArticleTitle = styled.div`
  color: #8155ba;
  /* font-family: Space Grotesk; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 23.8px */
  letter-spacing: 2.59px;
  text-transform: uppercase;
`;

export const ArticleSubtitle = styled.div`
  color: #332d3b;
  /* font-family: Manrope; */
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 170%; /* 30.6px */
`;

export const SwiperWrapper = styled.div`
  padding: 63px 0;
  @media only screen and (min-width: 767px) {
    display: none;
  }
`;

export const ArticleGroupWrapper = styled.div`
  display: none;
  @media only screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 32px;
    padding: 72px 0;
  }
`;

export const ButtonWrapper = styled.div`
  @media only screen and (min-width: 767px) {
    display: flex;
    width: 140px;
  }
`;
