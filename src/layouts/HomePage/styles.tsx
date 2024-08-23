import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 1fr;
  column-gap: 8px;
  width: 100%;
  @media only screen and (min-width: 767px) {
    grid-template-columns: repeat(8, auto);
    overflow-x: hidden;
  }
  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(12, auto);
    justify-items: center;
  }
`;

export const PageTile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  column-width: auto;
  grid-column-start: 1;
  grid-column-end: 5;
  padding: 0px 20px 0px 20px;
  @media only screen and (min-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 9;
    padding: 0px 40px 0px 40px;
  }
  @media only screen and (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const FirstTile = styled(PageTile)`
  width: 100%;
  height: 1146px;
  background-image: url(https://images.ctfassets.net/vm35rz92ipmx/7CdcfYV1vxsJImLEaImpDW/751b7d47e6ff3e9d7058f771527c2329/Frame_5.png);
  background-size: cover;
  filter: drop-shadow(0 0px 2px black);
  padding: 0;
  @media only screen and (min-width: 767px) {
    background-image: url(https://images.ctfassets.net/vm35rz92ipmx/5xoS29S5R1Wc6a9gzDRaTX/d767735a26cc2847cca1a85956d7f0fb/Frame_5__2_.png);
    flex-direction: row;
    height: 100%;
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: unset;
    width: 100vw;
  }
`;

export const Message = styled.div`
  width: 100%;
  color: #fff;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  text-transform: capitalize;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
  align-self: stretch;
  padding: 76px 20px 0px 20px;
  @media only screen and (min-width: 767px) {
    max-width: 531px;
    width: 100%;
  }
`;

export const SubMessage = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media only screen and (min-width: 767px) {
    width: 328px;
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

export const CallToActionButton = styled.button`
  cursor: pointer;
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
  z-index: 4;
`;
export const StatisticGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
  }
`;
export const StatisticsWrapper = styled.div``;

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
  align-items: center;
`;
export const StatSubtitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const SvgWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 33px;

  @media only screen and (min-width: 767px) {
    position: absolute;
    max-width: 675px;
    height: 100%;
    right: -45px;
    margin-top: 0;
    top: 90px;
  }
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

export const Description = styled.div`
  color: #332d3b;
  /* font-family: Manrope; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 27.2px */
  opacity: 0.6;
`;

export const BoostYourSuccessWrapper = styled(PageTile)`
  position: relative;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    max-width: 1220px;
  }
`;

export const PolygonWrapper = styled.div`
  position: absolute;
  right: 0%;
  top: -255px;
  z-index: 1;
`;

export const DetailsWrapper = styled.div``;

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
`;

export const BenefitsTitle = styled(HeaderTitle)`
  width: 100%;
  position: relative;
  z-index: 5;
  text-align: center;
`;

export const BenefitDetails = styled(Description)`
  position: relative;
  text-align: center;
  z-index: 5;
`;
