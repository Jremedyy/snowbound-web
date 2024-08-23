import React from "react";
import {
  ArticleSubtitle,
  ArticleTitle,
  Date,
  ArticleWrapper,
  Image,
} from "./styles";

const ArticleTile = ({
  title,
  subtitle,
  date,
  image,
}: {
  title: string;
  subtitle: string;
  date: string;
  image: string;
}) => {
  return (
    <ArticleWrapper>
      <Image src={image} />
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleSubtitle>{subtitle}</ArticleSubtitle>
      <Date>{date}</Date>
    </ArticleWrapper>
  );
};
export default ArticleTile;
