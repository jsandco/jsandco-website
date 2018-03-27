import React, { Component } from "react"
import styled, { keyframes } from 'styled-components';
import ReactRevealText from "react-reveal-text";
import Fade from 'react-reveal/Fade';



//components
import { Grid, Header, Container, Image } from "semantic-ui-react"
import { colors }       from "/imports/commons/colors";
import SeparatorJs      from "/imports/components/ui/SeparatorJs";

const Partners = () => (
    <PartnersWrapper id="about">
        <Container>
            <Grid centered relaxed="very">
                <Grid.Column width={16}>
                <Fade up>
                    <Header as="h1" textAlign="center">
                        {texts.title}
                        <SeparatorJs color="black" marged/>
                        <Header.Subheader>{texts.subtitle}</Header.Subheader>
                    </Header>
                </Fade>
                </Grid.Column>
                { texts.items.map((item, i) => (
                    <SingleItem item={item} key={i} index={i} />
                ))}
            </Grid>
        </Container>
    </PartnersWrapper>
)

export default Partners

const PartnersWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f8f8f8;
    .three.wide.computer.eight.wide.mobile.three.wide.tablet.column.single-item {
        display: flex;
        align-items: center;
    }
    .header {
        color: ${colors.main.black};
    }
    .single-item {
        cursor: pointer;
        .sub {
            text-align: justify !important;
        }
    }
`;

const SingleItem = ({ item, index }) => (
    <Grid.Column computer={3} tablet={3} mobile={8} className="single-item">
        <Fade up>
        <Image src={item.icon} onClick={() => window.open(item.link)} />
            {/* <Header as='h2' icon textAlign='center'>
                <Header.Content>
                    {item.title}
                </Header.Content>
            </Header> */}
        </Fade>
    </Grid.Column>
)

const texts = {
    title: "Qui sont nos partenaires ?",
    subtitle: "Un réseau de partenaires grandissant nous soutient dans nos actions et notre philosophie de simplifier l'accès au développement web.",
    items: [
        {
            title: "La Mélée", 
            icon: "/partners/lamelee.png",
            link: "http://wwww.lamelee.com"
        },
        {
            title: "La Cantine", 
            icon: "/partners/lacantine.png",
            link: "http://lacantine-toulouse.org/"
        },
        {
            title: "TechExMachina", 
            icon: "/partners/txm.png",
            link: "https://techexmachina.com/"
        },
        {
            title: "SteadyCook", 
            icon: "/partners/steadycook.png",
            link: "https://steadycook.fr/"
        },
        {
            title: "My OpenCity", 
            icon: "/partners/myopencity.png",
            link: "https://myopencity.io/"
        },
    ]
}