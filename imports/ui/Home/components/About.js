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
            title: "Un réseau", 
            icon: "/images/about/reseau.svg",
            description: `Nous sommes avant tout un réseau de développeurs 
            et d'entrepreneurs réunit autour des nouvelles technologies du 
            JavaScript. Le point central que nous sommes permet a ces deux 
            mondes d'échanger leurs connaissances.`
        },
        {
            title: "Une expertise", 
            icon: "/images/about/expert.svg",
            description: `Développmet, expériences utilisateur, design,
            graphisme et business autour du web. Nos membres et notre 
            environnement réunit des experts autour de Toulouse ayant
            de multiples compétences a partager.`
        },
        {
            title: "Des entrepreneurs", 
            icon: "/images/about/business.svg",
            description: `Le panel de domaines est très varié. Hebergement web, 
            la restauration, en passant par le e-commerce ou la démocratie en ligne.
            Les conseils avisés de nos entrepreneurs couvre un large éventails
            de possibilités.`
        },
        {
            title: "Des développeurs", 
            icon: "/images/about/code.svg",
            description: `Nous essayons d'apprendre constamment les dernières 
            technologies JavaScript afin de pouvoir conseiller et former 
            correctement nos membres. Nous appliquons également nos connaissances
            dans des cas de production afin de tester les technologies et leur limites.`
        },
        {
            title: "Des formations", 
            icon: "/images/about/formation.svg",
            description: `Notre gros projet est de faire des formations d'initiation 
            pour les débutants ou d'amélioration pour les plus aguerris afin de répandre 
            l'utilisation du JavaScript de façon ludique et le moins cher possible.`
        },
        {
            title: "Des évènements", 
            icon: "/images/about/screen.svg",
            description: `Suite à la réussite CodeFest de 2017, nous avons pour 
            projet d'organiser un autre autre hackathon dans les prochains mois 
            et d'en faire une habitude. Lighting talk, retour d'expériences ou simple 
            rencontre autour d'un verre, tenez vous au courant sur Facebook ou Meetup.`
        },
    ]
}