import React from "react";
import {
  LogoWrapper,
  Wrapper,
  CtaHamburgerWrapper,
  NavItemWrapper,
  NavItem,
} from "./styles";
import HamburgerMenu from "../../common/Icons/HamburgerMenu";
import { LetsTalkButton } from "./LetsTalkButton";
import LogoSvg from "../../common/Icons/LogoSvg";

const Header = ({
  handleCTAClick,
  showLinks,
}: {
  handleCTAClick: Function;
  showLinks: boolean;
}) => {
  const navItems = [
    { name: "How we can help", id: "#1" },
    { name: "Benefits", id: "#2" },
    { name: "Testimonials", id: "#3" },
    // { name: "Articles", id: "articles" },
  ];

  return (
    <Wrapper id="4">
      <LogoWrapper href="/" aria-label="Go to snowbound labs home page">
        <LogoSvg />
      </LogoWrapper>
      <NavItemWrapper>
        {showLinks &&
          navItems.map((item, index) => {
            return (
              <a href={item.id} key={index} rel="nofollow">
                <NavItem>{item.name}</NavItem>
              </a>
            );
          })}
        <LetsTalkButton
          onClick={() => handleCTAClick()}
          style={{
            filter: "drop-shadow(0px 2px 2px darkgrey)",
          }}
        >
          {"Let's Talk"}
        </LetsTalkButton>
      </NavItemWrapper>
      <CtaHamburgerWrapper>
        <LetsTalkButton
          onClick={() => handleCTAClick()}
          style={{
            filter: "drop-shadow(0px 2px 2px darkgrey)",
          }}
        >
          {"Let's Talk"}
        </LetsTalkButton>
        {/* <HamburgerMenu /> */}
      </CtaHamburgerWrapper>
    </Wrapper>
  );
};

export default Header;
