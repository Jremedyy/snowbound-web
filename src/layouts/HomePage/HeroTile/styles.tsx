import styled, { css } from "styled-components";
import { PageTile } from "../styles";

export const FirstTile = styled(PageTile)`
  width: 100%;
  height: 97%;
  padding: 0;
  filter: drop-shadow(0 0px 1px black);
  overflow-x: clip;
  background: linear-gradient(to bottom right, #333b77 45%, #d095b4 200%);

  @media only screen and (min-width: 767px) {
    filter: drop-shadow(0 0px 2px black);

    height: 100%;
  }

  @media only screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (min-width: 1440px) {
    height: 580px;
    justify-content: center;
  }
`;

export const Message = styled.div`
  width: 100%;
  max-width: 500px;
  color: #fff;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  text-transform: capitalize;
  @media only screen and (min-width: 767px) {
    max-width: unset;
    width: 435px;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
  align-self: stretch;
  padding: 76px 20px 0px 20px;
  z-index: 2;
  @media only screen and (min-width: 767px) {
    padding-bottom: 50px;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 20px;
  }
`;

export const SubMessage = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  max-width: 330px;
`;

export const CallToActionButton = styled.button`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 0px 36px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 45px;
  border-style: none;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: transparent;
  cursor: pointer;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StatTitle = styled.div`
  display: flex;
  gap: 6px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Space Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
export const StatSubtitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: min-content;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  transform: rotateX(45deg) rotateZ(45deg);
  width: calc(100% + 128px);
  max-width: 860px;
  height: min-content;
  margin-top: 64px;
  flex-shrink: 0;
  @media only screen and (min-width: 767px) {
    width: 100%;
    max-width: 700px;
  }
  @media only screen and (min-width: 1440px) {
    position: unset;
    max-height: 675px;
    margin-top: 40px;
  }
`;

const screenshotSelected = css`
  transform: scale(1.25) translateX(-15%) translateY(-15%);
`;

export const Screenshot = styled.img<{ $selected?: boolean }>`
  display: block;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
  box-shadow: 0 0 32px 0 rgba(34, 33, 81, 0.6);
  ${(props) => props.$selected && screenshotSelected};
`;

export const SvgWrapper = styled.div`
  display: flex;
  margin-top: 33px;
  height: 100%;
  z-index: 2;

  @media only screen and (min-width: 767px) {
    display: flex;
    position: absolute;
    max-width: 700px;
    width: 100%;
    left: 515px;
    top: -25px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: unset;
    width: 65%;
    left: unset;
    right: -215px;
    min-width: 700px;
  }
  @media only screen and (min-width: 1440px) {
    position: unset;
    max-width: 1200px;
    justify-content: right;
  }
`;

export const StatisticGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
    width: 352px;
  }
`;

export const Elevate = styled.span`
  color: #56baa9;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 200%;
  overflow: hidden !important;
  @media only screen and (min-width: 485px) and (max-width: 1200px) {
    height: 100%;
  }
  @media only screen and (min-width: 787px) {
    height: 100%;
  }
`;
