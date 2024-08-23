import React from "react";
import {
  ContactWrapper,
  FooterSubTitle,
  FooterTitle,
  MenuItem,
  MenuWrapper,
  NewsletterWrapper,
  SocialIcons,
  TitleSubTitleWrapper,
  InfoWrapper,
  ContactInfoWrapper,
  EmailSignupWrapper,
  EmailInput,
  SubmitButton,
  DisclosuresWrapper,
  DisclosureText,
  Wrapper,
  SizeWrapper,
  PolicyWrapper,
} from "./styles";
import FacebookSvg from "../../common/Icons/FacebookSvg";
import InstagramSvg from "../../common/Icons/InstagramSvg";
import LinkedInSvg from "../../common/Icons/LinkedInSvg";
import PhoneSvg from "../../common/Icons/PhoneSvg";
import MailSvg from "../../common/Icons/MailSvg";

const Footer = ({ handleCTAClick }: { handleCTAClick: Function }) => {
  const navItems: { name: string; id: string }[] = [
    { name: "Home", id: "#4" },
    { name: "Benefits", id: "#2" },
    { name: "Testimonials", id: "#3" },
    // { name: "Articles", id: "articles" },
  ];

  return (
    <Wrapper>
      <InfoWrapper>
        <TitleSubTitleWrapper>
          <FooterTitle>{"SNOWBOUND LABS"}</FooterTitle>
          <FooterSubTitle>
            {
              "Digital marketing and web development solutions to grow your business."
            }
          </FooterSubTitle>
          <SocialIcons>
            <a
              href="https://www.facebook.com/profile.php?id=61552019919614"
              target="blank"
              aria-label="Snowbound Labs Facebook"
            >
              <FacebookSvg />
            </a>
            <a
              href="https://www.instagram.com/snowboundlabs/"
              target="blank"
              aria-label="Snowbound Labs Instagram"
            >
              <InstagramSvg />
            </a>
            <a
              href="https://www.linkedin.com/company/snowbound-labs"
              target="blank"
              aria-label="Snowbound Labs LinkedIn"
            >
              <LinkedInSvg />
            </a>
          </SocialIcons>
        </TitleSubTitleWrapper>
        <MenuWrapper>
          <MenuItem style={{ opacity: "1", fontWeight: "700" }}>
            {"Menu"}
          </MenuItem>
          {navItems.map((item: { name: string; id: string }, index) => {
            return (
              <a
                href={item.id}
                key={index}
                rel="nofollow"
                style={{ textDecoration: "none" }}
              >
                <MenuItem style={{ cursor: "pointer" }}>{item.name}</MenuItem>
              </a>
            );
          })}
          <MenuItem
            style={{
              opacity: "1",
              fontWeight: "700",
              color: "#F64F59 !important",
              cursor: "pointer",
            }}
            onClick={() => handleCTAClick()}
          >
            {"Let's Talk"}
          </MenuItem>
        </MenuWrapper>
        <ContactWrapper>
          <MenuItem
            style={{ opacity: "1", fontWeight: "700", marginBottom: "18px" }}
          >
            {"Contact Us"}
          </MenuItem>

          <ContactInfoWrapper>
            <PhoneSvg />
            <MenuItem>{"(570) 592-8975"}</MenuItem>
          </ContactInfoWrapper>
          <ContactInfoWrapper>
            <MailSvg />
            <MenuItem>{"contact@snowboundlabs.com"}</MenuItem>
          </ContactInfoWrapper>
        </ContactWrapper>
        {/* <NewsletterWrapper>
            <MenuItem
              style={{ opacity: "1", fontWeight: "700", marginBottom: "18px" }}
            >
              {"Newsletter"}
            </MenuItem>
            <FooterSubTitle>
              {
                "Subscribe to our monthly newsletter to receive monthly updates and announcements."
              }
            </FooterSubTitle>
            <EmailSignupWrapper>
              <EmailInput />
              <SubmitButton>SUBSCRIBE</SubmitButton>
            </EmailSignupWrapper>
          </NewsletterWrapper> */}
      </InfoWrapper>
      <DisclosuresWrapper>
        <DisclosureText>
          <PolicyWrapper href="/terms-conditions">
            {"Terms and Conditions"}
          </PolicyWrapper>
          {" | "}
          <PolicyWrapper href="/privacy-policy">
            {"Privacy Policy"}
          </PolicyWrapper>
        </DisclosureText>
        <DisclosureText>
          ©Copyright 2023 Snowbound Labs All Rights Reserved
        </DisclosureText>
      </DisclosuresWrapper>
    </Wrapper>
  );
};

export default Footer;
