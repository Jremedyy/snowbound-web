import React from "react";
import CodeSvg from "../../../common/Icons/CodeSvg";
import DesktopIcon from "../../../common/Icons/DesktopComputerOutline";
import SearchOutline from "../../../common/Icons/SearchOutline";
import {
  WhereWeComeInWrapper,
  ServicesSection,
  TitleDescriptionWrapper,
  ServiceTitle,
  ButtonWrapper,
  Wrapper,
} from "./styles";
import {
  SectionHeader,
  HeaderTitle,
  Description,
  CallToActionButton,
} from "../styles";

const OurSolutionTile = (props: { handleCTAClick: Function }) => {
  return (
    <Wrapper>
      <WhereWeComeInWrapper>
        <SectionHeader>Our Solution</SectionHeader>
        <HeaderTitle>
          {"This is where we"} <br /> {"come in"}
        </HeaderTitle>
        <Description>
          {
            "At Snowbound Labs, we prioritize a unique entrepreneurial approach. We become an integral part of your team, fully committed to understanding and achieving your business goals."
          }
        </Description>
        <ButtonWrapper>
          <CallToActionButton
            style={{ background: "#F64F59" }}
            onClick={() => props.handleCTAClick()}
          >
            {"Let's Talk"}
          </CallToActionButton>
        </ButtonWrapper>
      </WhereWeComeInWrapper>
      <ServicesSection>
        <TitleDescriptionWrapper>
          <ServiceTitle>
            <DesktopIcon />
            {"Web Design"}
          </ServiceTitle>
          <Description>
            {
              "Our team works with you to build an ideal website that effectively promotes your business, product, and brand."
            }
          </Description>
        </TitleDescriptionWrapper>
        <TitleDescriptionWrapper>
          <ServiceTitle>
            <SearchOutline />
            {"Search Engine Optimization (SEO)"}
          </ServiceTitle>
          <Description>
            {
              "Looking to increase your company’s search results? We create and implement custom SEO plans to complement your marketing strategy."
            }
          </Description>
        </TitleDescriptionWrapper>{" "}
        <TitleDescriptionWrapper>
          <ServiceTitle>
            <CodeSvg />
            {"Custom Software Solutions"}
          </ServiceTitle>
          <Description>
            {
              "Do you have a more complex idea but don’t know where to start? With experience shipping over 50 projects from idea to launch, we can help turn your dream into a reality."
            }
          </Description>
        </TitleDescriptionWrapper>
      </ServicesSection>
    </Wrapper>
  );
};

export default OurSolutionTile;
