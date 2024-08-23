import React from "react";
import PolygonSvg from "../../../common/Icons/PolygonSvg";
import {
  BenefitDetails,
  Benefits,
  BenefitsTitle,
  DontKnowWhereToStartWrapper,
  DetailsWrapper,
  PolygonWrapper,
  Image,
  ImageWrapper,
  ButtonWrapper,
} from "./styles";
import { CallToActionButton } from "../styles";

const DontKnowWhereToStartTile = (props: { handleCTAClick: Function }) => {
  return (
    <DontKnowWhereToStartWrapper>
      <PolygonWrapper>
        <PolygonSvg />
      </PolygonWrapper>
      <DetailsWrapper>
        <Benefits>{"Elevate Your Business"}</Benefits>
        <BenefitsTitle>{"Don't Know Where To Start?"}</BenefitsTitle>
        <BenefitDetails>
          {
            "Running a business is hard enough. Choosing an agency shouldn’t add to your stress. Rest easy knowing your needs are being taken care of. We let you focus on what’s most important: growing your company."
          }
        </BenefitDetails>
        <ButtonWrapper>
          <CallToActionButton
            style={{ background: "#F64F59" }}
            onClick={() => props.handleCTAClick()}
          >
            {"Let us handle it"}
          </CallToActionButton>
        </ButtonWrapper>
      </DetailsWrapper>
      <ImageWrapper>
        <Image
          src="https://images.ctfassets.net/vm35rz92ipmx/5IKD9MpUfPRQWND1lQYzyj/e7b7f4858d93421af22dd5c1b5c1cd73/MacBook_Pro_16.png?fm=avif"
          alt="macbook"
        />
      </ImageWrapper>
    </DontKnowWhereToStartWrapper>
  );
};

export default DontKnowWhereToStartTile;
