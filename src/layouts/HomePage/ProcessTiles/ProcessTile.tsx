import React from "react";
import {
  Header,
  ImageWrapper,
  Description,
  Image,
  Position,
  DescriptionWrapper,
  ProcessTileWrapper,
  ReverseTileWrapper,
} from "./styles";

const ProcessTile = ({
  image,
  header,
  description,
  position,
  reverse,
  alt,
}: {
  image: string;
  header: string;
  description: string;
  position: string;
  reverse: boolean;
  alt: string;
}) => {
  return (
    <>
      {reverse ? (
        <ProcessTileWrapper>
          <ImageWrapper>
            <Image src={image} alt={alt} />
          </ImageWrapper>
          <DescriptionWrapper>
            <Position>{position}</Position>
            <Header>{header}</Header>
            <Description>{description}</Description>
          </DescriptionWrapper>
        </ProcessTileWrapper>
      ) : (
        <ReverseTileWrapper>
          <DescriptionWrapper>
            <Position>{position}</Position>
            <Header>{header}</Header>
            <Description>{description}</Description>
          </DescriptionWrapper>
          <ImageWrapper>
            <Image src={image} alt={alt} />
          </ImageWrapper>
        </ReverseTileWrapper>
      )}
    </>
  );
};

export default ProcessTile;
