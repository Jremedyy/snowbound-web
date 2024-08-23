import React from "react";
import PolygonSvg from "../../../common/Icons/PolygonSvg";
import {
  BenefitDetails,
  Benefits,
  BenefitsTitle,
  BoostYourSuccessWrapper,
  DetailsWrapper,
  PolygonWrapper,
} from "./styles";

const BoostSuccessTile = () => {
  return (
    <BoostYourSuccessWrapper>
      <PolygonWrapper>
        <PolygonSvg />
      </PolygonWrapper>
      <DetailsWrapper>
        <Benefits id="2">{"Benefits"}</Benefits>
        <BenefitsTitle>{"Boost your online success"}</BenefitsTitle>
        <BenefitDetails>
          {"The advantages of our web development and SEO solutions"}
        </BenefitDetails>
      </DetailsWrapper>
    </BoostYourSuccessWrapper>
  );
};

export default BoostSuccessTile;
