import React, { Component } from "react"
import styled, { keyframes } from 'styled-components';
import ReactRevealText from "react-reveal-text";
import Fade from 'react-reveal/Fade';



//components
import { Grid, Header, Container, Image, Modal, Button, Transition } from "semantic-ui-react"
import { colors }       from "/imports/commons/colors";
import SeparatorJs      from "/imports/components/ui/SeparatorJs";

const Team = ({ isMobile }) => (
    <TeamWrapper id="team">
        <Container>
            <Grid centered relaxed="very" stackable>
                <Grid.Column width={16} style={{ marginBottom: 25 }} >
                <Fade up>
                <Header as="h1" textAlign="center">
                    {texts.title}
                    <SeparatorJs color="yellow" marged />
                    <Header.Subheader>{texts.subtitle}</Header.Subheader>
                </Header>
                </Fade>
                </Grid.Column>
                <Grid.Column width={5}>
                    <ModalMember/>
                </Grid.Column>
            </Grid>
        </Container>
    </TeamWrapper>
)

export default Team

class ModalMember extends Component {
    state = {
        visible: false
    }

    toggleVisible = () => this.setState({ visible: !this.state.visible })

    render(){
        const { visible } = this.state;
        return(
            <React.Fragment>
                <Fade up>
                    <Button className="js-yellow" fluid onClick={this.toggleVisible}>Devenir Membre</Button>
                </Fade>
                <Transition visible={visible} animation="fade">
                    <Modal open={visible}>
                        <Modal.Content>
                            <iframe 
                                id="haWidget" 
                                allowTransparency={true} 
                                src="https://www.helloasso.com/associations/js-co/adhesions/adhesion-a-js-co/widget" 
                                style={{width:'100%', height:'70vh', border:'none'}}
                            />
                        </Modal.Content>
                        <Modal.Actions>
                            <Button 
                                color="red"
                                onClick={this.toggleVisible}
                                content="Fermer"
                            />
                        </Modal.Actions>
                    </Modal>
                </Transition>
            </React.Fragment>
        )
    }
}

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
    .js-yellow {
        background-color: ${colors.main.yellow};
        color: ${colors.main.black};
    }
`;

const texts = {
    title: "Devenir membre ?",
    subtitle: "Vous souhaitez rejoindre notre association et participer à nos différents évènements",
}