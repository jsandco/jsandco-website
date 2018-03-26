import React, { Component } from "react"
import styled, { keyframes } from 'styled-components';
import ReactRevealText from "react-reveal-text";
import Fade from 'react-reveal/Fade';



//components
import { Grid, Header, Container, Image } from "semantic-ui-react"
import { colors }       from "/imports/commons/colors";
import SeparatorJs      from "/imports/components/ui/SeparatorJs";

const About = () => (
    <AboutWrapper id="about">
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
    </AboutWrapper>
)

export default About

const AboutWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f8f8f8;
    .header {
        color: ${colors.main.black};
    }
    .single-item {
        .sub {
            text-align: justify !important;
        }
    }
`;

const SingleItem = ({ item, index }) => (
    <Grid.Column computer={5} tablet={8} mobile={13} className="single-item">
        <Fade 
            left={index === 0 ||index === 3}
            right={index === 2 ||index === 5}
        >
            <Header as='h2' icon textAlign='center'>
                <Image src={item.icon} />
                <Header.Content>
                    {item.title}
                    <Header.Subheader>
                        {item.description}
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Fade>
    </Grid.Column>
)

const texts = {
    title: "Que sommes nous ?",
    subtitle: "Une association 1901 au service des développeurs et des entrepreneurs.",
    items: [
        {
            title: "Hispter Ipsum", 
            icon: "/images/about/001.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
        {
            title: "Hispter Ipsum", 
            icon: "/images/about/002.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
        {
            title: "Hispter Ipsum", 
            icon: "/images/about/003.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
        {
            title: "Hispter Ipsum", 
            icon: "/images/about/004.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
        {
            title: "Hispter Ipsum", 
            icon: "/images/about/005.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
        {
            title: "Hispter Ipsum", 
            icon: "/images/about/006.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
    ]
}