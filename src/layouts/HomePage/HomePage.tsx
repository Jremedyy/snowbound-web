import React, { useState } from "react";
import { Wrapper } from "./styles";
import HeroTile from "./HeroTile/HeroTile";
import FeelingLostTile from "./FeelingLostTile/FeelingLostTile";
import OurSolutionTile from "./OurSolutionTile/OurSolutionTile";
import BoostSuccessTile from "./BoostSuccessTile/BoostSuccessTile";
import ProcessGroup from "./ProcessTiles/ProcessGroup";
import DontKnowWhereToStartTile from "./DontKnowWhereToStartTile/DontKnowWhereToStartTile";
import TestimonialTile from "./TestimonialTile/TestimonialTiles";
import ArticleTile from "./ArticlesTile/ArticlesTile";
import Head from "next/head";

const HomePage = ({
  handleCTAClick = () => {},
}: {
  handleCTAClick?: Function;
}) => {
  return (
    <>
      <Head>
        <title>
          {
            "Snowbound Labs: Expert SEO, Website Design, Digital Marketing & Custom Applications"
          }
        </title>
        <meta
          name="description"
          content="Snowbound Labs is your premier partner for comprehensive software development services. Elevate your online presence with our expert SEO strategies, eye-catching website designs, and targeted digital marketing solutions. We specialize in crafting custom applications to meet your unique business needs. Boost your visibility, engage your audience, and drive success with Snowbound Labs. Contact us today for a tailored solution that sets you apart in the digital landscape."
        />
      </Head>
      <Wrapper>
        <HeroTile handleCTAClick={handleCTAClick} />
        <FeelingLostTile />
        <OurSolutionTile handleCTAClick={handleCTAClick} />
        <BoostSuccessTile />
        <ProcessGroup />
        <DontKnowWhereToStartTile handleCTAClick={handleCTAClick} />
        <TestimonialTile />
        {/* <ArticleTile /> */}
      </Wrapper>
    </>
  );
};

export default HomePage;
