import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Wrapper,
  Description,
  ArticleTileTitle,
  ArticleTileSubtitle,
  SwiperWrapper,
  ArticleGroupWrapper,
  ButtonWrapper,
  SizeWrapper,
} from "./styles";
import Article from "./Article";
import { CallToActionButton } from "../styles";

const ArticleTile = () => {
  return (
    <Wrapper id="articles">
      <SizeWrapper>
        <ArticleTileTitle>{"Articles"}</ArticleTileTitle>
        <ArticleTileSubtitle>{"Latest blogs and articles"}</ArticleTileSubtitle>
        <Description>
          {
            "Aenean tincidunt iaculis at vitae viverra vitae dictumst faucibus id. "
          }
        </Description>
        <SwiperWrapper>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <Article
                title={"Finance"}
                subtitle={
                  "How to chose the right colors when creating a website"
                }
                date={"Nov 21, 2023"}
                image={
                  "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Article
                title={"Finance"}
                subtitle={
                  "How to chose the right colors when creating a website"
                }
                date={"Nov 21, 2023"}
                image={
                  "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Article
                title={"Finance"}
                subtitle={
                  "How to chose the right colors when creating a website"
                }
                date={"Nov 21, 2023"}
                image={
                  "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
                }
              />
            </SwiperSlide>
          </Swiper>
        </SwiperWrapper>
        <ArticleGroupWrapper>
          <Article
            title={"Finance"}
            subtitle={"How to chose the right colors when creating a website"}
            date={"Nov 21, 2023"}
            image={
              "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
            }
          />
          <Article
            title={"Finance"}
            subtitle={"How to chose the right colors when creating a website"}
            date={"Nov 21, 2023"}
            image={
              "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
            }
          />
          <Article
            title={"Finance"}
            subtitle={"How to chose the right colors when creating a website"}
            date={"Nov 21, 2023"}
            image={
              "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
            }
          />
          <Article
            title={"Finance"}
            subtitle={"How to chose the right colors when creating a website"}
            date={"Nov 21, 2023"}
            image={
              "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
            }
          />
          <Article
            title={"Finance"}
            subtitle={"How to chose the right colors when creating a website"}
            date={"Nov 21, 2023"}
            image={
              "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
            }
          />
          <Article
            title={"Finance"}
            subtitle={"How to chose the right colors when creating a website"}
            date={"Nov 21, 2023"}
            image={
              "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png"
            }
          />
        </ArticleGroupWrapper>
        <ButtonWrapper>
          <CallToActionButton
            style={{ border: "1px solid #332D3B", color: "black" }}
          >
            {"View All"}
          </CallToActionButton>
        </ButtonWrapper>
      </SizeWrapper>
    </Wrapper>
  );
};

export default ArticleTile;
