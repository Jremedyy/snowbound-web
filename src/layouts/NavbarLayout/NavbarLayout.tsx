import React, { useState } from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { animateScroll as scroll } from "react-scroll";
import ContactModal from "@/components/ContactModal/ContactModal";
interface NavbarLayoutProps {
  render: (mainProps: MainProps) => ReactNode;
  showLinks: boolean;
}

const NavbarLayout = (props: NavbarLayoutProps) => {
  const handleCTAClick = () => {
    const bodyElement = document.body;
    const modalElement = document.getElementById("modal");
    bodyElement.classList.add("modalOpenBody");
    modalElement?.classList.add("openModal");
  };
  const handleCloseModal = () => {
    const bodyElement = document.body;
    const modalElement = document.getElementById("modal");
    bodyElement.classList.remove("modalOpenBody");
    modalElement?.classList.remove("openModal");
  };

  const mainProps: MainProps = {
    handleCTAClick,
  };

  return (
    <Wrapper>
      <ContactModal handleCloseModal={handleCloseModal} />
      <Header handleCTAClick={handleCTAClick} showLinks={props.showLinks} />
      <Main>{props.render(mainProps)}</Main>
      <Footer handleCTAClick={handleCTAClick} />
    </Wrapper>
  );
};

export default NavbarLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
interface MainProps {
  handleCTAClick?: Function;
}

const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;
