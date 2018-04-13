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
        cursor: pointer;
        .sub {
            text-align: justify !important;
        }
    }
`;

const SingleItem = ({ item, index }) => (
    <Grid.Column computer={5} tablet={8} mobile={13} className="single-item">
    <Fade left={index === 0} right={index === 2}>
            <Header as='h2' icon textAlign='center' onClick={() => window.open(item.link)}>
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
        Toulouse est notre coeur.<br/>La Cantine notre QG.<br/>Le web notre repaire.
    </div>,
    items: [
        {
            title: "Meetup", 
            icon: "/social/meetup.svg",
            link: "https://www.meetup.com/fr-FR/JavaScript-and-Co",
            description: `Du lighting talk au hackaton, en passant par la formation ou le retour d'expérience.
            Nous organisons de nombreux évènements tout au long de l'année sur des sujets variés autour du web.`
        },
        {
            title: "Github", 
            icon: "/social/github.svg",
            link: "https://github.com/jsandco",
            description: `Notre compte Github contient nos packages mis en communs,
            le code de ce site internet mais également certains boilerplates en javascript.
            Nos cours et formations seront aussi mis a disposition dans cet espace commun.`
        },
        {
            title: "Facebook", 
            icon: "/social/facebook.svg",
            link: "https://www.facebook.com/js.and.co.association/",
            description: `Rejoignez nous sur facebook, nous partageons les évènements sur notre page.
            Mais également des articles intéressants sur le développement web et l'entreprenariat.`
        },
    ]
}