import React from "react";
import QuestionmarkCircle from "../../../common/Icons/QuestionmarkCircle";
import {
  ImageWrapper,
  QuestionGraphicWrapper,
  SectionHeader,
  HeaderTitle,
  Description,
  Image,
  FeelingLostWrapper,
  DescriptionWrapper,
} from "./styles";

const FeelingLostTile = () => {
  return (
    <FeelingLostWrapper id="1">
      <ImageWrapper>
        <QuestionGraphicWrapper>
          <QuestionmarkCircle />
        </QuestionGraphicWrapper>
        <Image
          src="https://images.ctfassets.net/vm35rz92ipmx/6N0gs9EN7SYz9wFl0k4qJ7/7d9612a9f6f0e99369e2cd3c0fe62230/FeelingLost16x9.png?fm=avif"
          alt="Man confused at computer"
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <SectionHeader>{"The Problem"}</SectionHeader>
        <HeaderTitle>{"Feeling Lost?"}</HeaderTitle>
        <Description>
          {
            "Is your outdated website hindering your brand's recognition in today's fast-changing digital landscape? Your business deserves a website that reflects your dedication and keeps up with evolving tech trends."
          }
        </Description>
      </DescriptionWrapper>
    </FeelingLostWrapper>
  );
};

export default FeelingLostTile;
