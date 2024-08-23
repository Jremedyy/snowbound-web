import React from "react";
import {
  Subtitle,
  TestimonialWrapper,
  Title,
  Wrapper,
  Image,
  Testimony,
  ImageWrapper,
  JobTitle,
  Name,
  PersonDetailsWrapper,
  DetailsWrapper,
  QuoteGraphicWrapper,
} from "./styles";
import LeftQuotesSvg from "../../../common/Icons/LeftQuotesSvg";

const Testimonial = () => {
  return (
    <TestimonialWrapper id="3">
      <ImageWrapper>
        {/* <QuoteGraphicWrapper>
          <LeftQuotesSvg />
        </QuoteGraphicWrapper> */}
        <Image
          src="https://images.ctfassets.net/vm35rz92ipmx/1K7FPscQCyeRmJMLxmbjtj/35c2fb4ea6886cb6aee8bd563bff50d6/image__1_.png?fm=avif"
          alt="Headshot"
        />
      </ImageWrapper>
      <DetailsWrapper>
        <Title>{"Testimonial"}</Title>
        <Subtitle>{"What our clients are saying"}</Subtitle>
        <Testimony>
          {
            "“Snowbound Labs helped me create a custom web application to better engage with my community of 570k+ members. The team is professional, collaborative, and quick.  As entrepreneurs, they understood my needs and asked the right questions to build exactly what I was looking for. I’d highly recommend working with them on your next project!”"
          }
        </Testimony>
        <PersonDetailsWrapper>
          <Name>{"Matt Korhrs"}</Name>
          <JobTitle href="https://mattkohrs.locals.com/" target="_blank">
            {"Founder, The Matt Kohrs Show"}
          </JobTitle>
        </PersonDetailsWrapper>
      </DetailsWrapper>
    </TestimonialWrapper>
  );
};

const TestimonialTile = () => {
  return (
    <Wrapper>
      <Testimonial />
    </Wrapper>
  );
};

export default TestimonialTile;
