import styled from "styled-components";
import { PageTile } from "../../layouts/HomePage/styles";

export const Wrapper = styled.div`
  background: #332d3b;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 767px) {
    padding: 0 20px;
  }
`;
export const SizeWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    /* max-width: 1220px;
    width: 100%; */
  }
`;

export const InfoWrapper = styled(PageTile)`
  padding-top: 43px;
  padding-bottom: 23px;
  gap: 45px;
  text-align: center;
  @media only screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    gap: 36px;
    text-align: left;
    max-width: 1220px;
    width: 100%;
    justify-content: center;
    align-self: center;
    padding-left: unset;
    padding-right: unset;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;
export const FooterTitle = styled.div`
  color: #fff;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: 4px;
`;

export const FooterSubTitle = styled.div`
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const TitleSubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media only screen and (min-width: 767px) {
    width: 300px;
  }
`;

export const SocialIcons = styled.div`
  padding-top: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 14px;
  @media only screen and (min-width: 767px) {
    justify-content: left;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media only screen and (min-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    gap: 24px;
    width: 300px;
    text-align: center;
  }
`;
export const MenuItem = styled.div`
  color: #fff !important;
  font-family: Space Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  opacity: 0.5;
  text-decoration: none;
  &:visited {
    color: #fff !important;
  }
`;

export const ContactWrapper = styled.div``;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  padding: 7px 0px;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: left;
    width: 300px;
  }
`;

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;
  padding-bottom: 84px;
  max-width: 500px;
`;

export const EmailSignupWrapper = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const EmailInput = styled.input`
  display: flex;
  width: 75%;
  height: 44px;
  padding: 16px 17px;
  align-items: flex-start;
`;

export const SubmitButton = styled.button`
  width: 25%;
  height: 44px;
  background: #8155ba;
  border-style: none;
  color: #fff;
  font-family: Space Grotesk;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  @media only screen and (min-width: 767px) {
    font-size: 12px;
  }
`;

export const DisclosuresWrapper = styled.div`
  background: #332d3b;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  text-align: center;
  padding: 20px;
  gap: 9px;
  border-top: 1px solid #ffffff1a;
`;

export const DisclosureText = styled.div`
  opacity: 0.4;
`;

export const PolicyWrapper = styled.a`
  cursor: pointer;
  color: #fff;
  text-decoration: underline;
  &:visited {
    color: #fff;
  }
`;
