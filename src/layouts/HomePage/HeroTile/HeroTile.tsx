import React from "react";
import { Checkmark } from "@/common/Icons/Checkmark";
import BackgroundSvg from "@/common/Icons/BackgroundSvg";
import {
  CallToActionButton,
  FirstTile,
  Message,
  MessageWrapper,
  StatSubtitle,
  StatTitle,
  StatisticsWrapper,
  SubMessage,
  SvgWrapper,
  ButtonWrapper,
  StatisticGroupWrapper,
  Elevate,
  ScreenshotGrid,
  Screenshot,
  BackgroundWrapper,
} from "./styles";

const screenshotUrls = [
  "https://images.ctfassets.net/vm35rz92ipmx/6u489ilXuk8Ixh3wzDWgWv/348daa357b6f6a8153009e5332bbdcb1/WANTD.png?fm=avif",
  "https://images.ctfassets.net/vm35rz92ipmx/3xzz1BobRBJWtXM15w3EhH/ac92406d14606e72a8ab136112cddc4e/Discord_Sync.png?fm=avif",
  "https://images.ctfassets.net/vm35rz92ipmx/44EohaUzaXQXrlTLorydXY/89d5045a6b5835e2970649ecced87cc7/localhost_3000__2.png?fm=avif",
  "https://images.ctfassets.net/vm35rz92ipmx/2QFeKi0O1wyQdGQWQRORRz/faa99322f6ef4974261a90fb125f0b36/Moshin2.0.png?fm=avif",
  "https://images.ctfassets.net/vm35rz92ipmx/5L7aycmMXTNeKLklq0Fjpf/936b5aa302664376accd46e7c2315e1b/Newhart__1_.png?fm=avif",
  "https://images.ctfassets.net/vm35rz92ipmx/6GYcsgTEKrk2HxUDC81Wc3/60ead0d4be14b35dd5ed430d35c04ab3/Swamp.png?fm=avif",
];

const HeroTile = ({ handleCTAClick }: { handleCTAClick: Function }) => {
  return (
    <FirstTile>
      <BackgroundWrapper>
        <BackgroundSvg />
      </BackgroundWrapper>
      <MessageWrapper>
        <Message>
          {"We'll Help You "}
          <Elevate>{"Elevate"}</Elevate>
          {" Your Online Presence"}
        </Message>
        <SubMessage>
          {
            "Digital marketing and web development solutions to grow your business."
          }
        </SubMessage>
        <ButtonWrapper>
          <CallToActionButton
            style={{ background: "#F64F59" }}
            onClick={() => handleCTAClick()}
          >
            {"Lets Talk"}
          </CallToActionButton>
          {/* <CallToActionButton
            style={{ border: "1px solid #FFF", whiteSpace: "nowrap" }}
          >
            {"Who are we?"}
          </CallToActionButton> */}
        </ButtonWrapper>
        <StatisticGroupWrapper>
          <StatisticsWrapper>
            <StatTitle>
              <Checkmark />
              {"50+ Projects Executed"}
            </StatTitle>
            <StatSubtitle>{"from idea to launch"}</StatSubtitle>
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StatTitle>
              <Checkmark />
              {"1.1M+ Impressions"}
            </StatTitle>
            <StatSubtitle>{"6-Months After Launch"}</StatSubtitle>
          </StatisticsWrapper>
        </StatisticGroupWrapper>
      </MessageWrapper>
      <SvgWrapper>
        <ScreenshotGrid>
          {screenshotUrls.map((url, index) => (
            <Screenshot
              key={`screenshot-${index}`}
              src={url}
              $selected={index === 2}
              alt="Website Screenshot"
            />
          ))}
        </ScreenshotGrid>
      </SvgWrapper>
    </FirstTile>
  );
};

export default HeroTile;
