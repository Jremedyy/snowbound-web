import LogoSvg from "@/common/Icons/LogoSvg"
import { H2, LogoWrapper, Span, Header, Main, Button, Wrapper } from "./styles"
import Head from "next/head"

export const HomePageEmpty = (props: any) => {
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
                <Header>
                    <LogoWrapper>
                        <LogoSvg />
                    </LogoWrapper>
                </Header>
                <Main>
                    <H2>{`🛠️ We're busy building`}</H2>
                    <Span>{`Contact us at admin@snowboundlabs.com`}</Span>
                    <Button href={"mailto:admin@snowboundlabs.com"}>{`✉️ Contact`}</Button>
                </Main>
            </Wrapper>
        </>
    )
}