import React, { Component } from "react"
import styled, { keyframes } from 'styled-components';
import ReactRevealText from "react-reveal-text";
import Fade from 'react-reveal/Fade';



//components
import { Grid, Header, Container, Image } from "semantic-ui-react"
import { colors }       from "/imports/commons/colors";
import SeparatorJs      from "/imports/components/ui/SeparatorJs";

const Contacts = () => (
    <ContactsWrapper id="contact">
        <Container>
            <Grid centered relaxed="very">
                <Grid.Column width={16}>
                <Fade up>
                <Header as="h1" textAlign="center">
                    {texts.title}
                    <SeparatorJs color="black" marged />
                    <Header.Subheader>{texts.subtitle}</Header.Subheader>
                </Header>
                </Fade>
                </Grid.Column>
                { texts.items.map((item, i) => (
                    <SingleItem item={item} key={i} index={i} />
                ))}
            </Grid>
        </Container>
    </ContactsWrapper>
)

export default Contacts

const ContactsWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${colors.main.yellow};
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
    <Fade left={index === 0} right={index === 2}>
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
    title: "Où sommes nous ?",
    subtitle: <div>
        Toulouse est notre coeur<br/>La cantine notre QG pour la plupart<br/>Le web notre repaire pour tous.
    </div>,
    items: [
        {
            title: "Facebook", 
            icon: "/social/facebook.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
        {
            title: "Meetup", 
            icon: "/social/meetup.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
        {
            title: "Github", 
            icon: "/social/github.svg",
            description: `Kickstarter paleo shoreditch, narwhal gochujang 
            hammock hella iceland chartreuse skateboard 90's. 
            Retro photo booth slow-carb trust fund salvia. 
            Neutra cronut celiac bespoke mlkshk organic`
        },
    ]
}