import React, { Component } from "react"
import styled, { keyframes } from 'styled-components';
import ReactRevealText from "react-reveal-text";
import Fade from 'react-reveal/Fade';



//components
import { Grid, Header, Container, Image } from "semantic-ui-react"
import { colors }       from "/imports/commons/colors";
import SeparatorJs      from "/imports/components/ui/SeparatorJs";

const Team = ({ isMobile }) => (
    <TeamWrapper id="team">
        <Container>
            <Grid centered relaxed="very">
                <Grid.Column width={16} style={{ marginBottom: 25 }} >
                <Fade up>
                <Header as="h1" textAlign="center">
                    {texts.title}
                    <SeparatorJs color="yellow" marged />
                    <Header.Subheader>{texts.subtitle}</Header.Subheader>
                </Header>
                </Fade>
                </Grid.Column>
                { texts.items.map((item, i) => (
                    <SingleItem item={item} key={i} index={i} isMobile={isMobile} />
                ))}
                <Grid.Column width={16}>
                <Fade>
                    <SeparatorJs color="yellow" />
                </Fade>
                </Grid.Column>
                { texts.others.map((item, i) => (
                    <SingleSmallItem item={item} key={i} index={i} isMobile={isMobile} />
                ))}
            </Grid>
        </Container>
    </TeamWrapper>
)

export default Team

const TeamWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${colors.main.black};
    .header {
        color: ${colors.main.yellow};
        .sub {
            color: #f8f8f8 !important;
        }
    }
    .single-item, .single-small-item {
        .image {
            border: 4px solid ${colors.main.yellow};
            margin-bottom: 12px;
        }
        .sub {
            color: #f8f8f8 !important;
        }
    }
`;

const SingleItem = ({ item, index, isMobile }) => (
    <Grid.Column computer={5} tablet={5} mobile={13} className="single-item">
    <Fade left={index === 0} right={index === 2}>
        <Image src={item.icon} size={isMobile ? "small" : null } centered />
            <Header as='h3' icon textAlign='center'>
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

const SingleSmallItem = ({ item, index, isMobile }) => (
    <Grid.Column computer={3} tablet={3} mobile={13} className="single-small-item">
    <Fade up>
        <Image src={item.picture} size={isMobile ? "small" : null } centered />
            <Header as='h5' icon textAlign='center'>
                <Header.Content>
                    {item.name}
                </Header.Content>
            </Header>
        </Fade>
    </Grid.Column>
)

const texts = {
    title: "Qui sommes nous ?",
    subtitle: <div>
        2018, c'est un nouveau trio pour animer notre association.<br/>Mais nous sommes légion !!
    </div>,
    items: [
        {
            title: "Francois AUBEUT-GERVAISE", 
            icon: "/office/francois.jpg",
            description: "Président"
        },
        {
            title: "Jérémy SIMONKLEIN-ANGELY", 
            icon: "/office/jimmy.jpg",
            description: "Secrétaire"
        },
        {
            title: "Tibault LEFORT", 
            icon: "/office/thibault.jpg",
            description: "Trésorier"
        },
    ],
    others: [
        {
            name: "David PANART",
            picture: "/team/david.jpg",
        },
        {
            name: "Simon FAUX",
            picture: "/team/simon.jpg",
        },
        {
            name: "Jérôme MOULY",
            picture: "/team/jerome.jpg",
        },
        {
            name: "Léo SEMIRAMOTH",
            picture: "https://placeimg.com/180/180/any"
        },
        {
            name: "Quentin CRAISSAC",
            picture: "/team/quentin.jpg",
        },
    ]
}