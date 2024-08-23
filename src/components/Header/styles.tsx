import styled from "styled-components";
import Link from "react-scroll";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 58px;
  background: white;
  padding: 0 20px;
  justify-content: space-between;

  @media only screen and (min-width: 767px) {
    align-items: center;
    padding: 0 40px;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  width: 244px;
  height: 100%;
  flex-shrink: 0;
`;

export const CtaHamburgerWrapper = styled.div`
  display: flex;
  width: 100%;
  width: 244px;
  align-items: center;
  justify-content: right;
  gap: 10px;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: contain;
`;

export const NavItemWrapper = styled.div`
  display: none;
  @media only screen and (min-width: 1000px) {
    display: flex;
    gap: 32px;
    align-items: center;
    max-width: 1550px;
    width: 100%;
    justify-content: end;
  }
`;

export const NavItem = styled.button`
  color: #332d3b;
  font-family: Space Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  border-style: none;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
