import React, { Component } from "react"
import styled, { keyframes } from 'styled-components';
import ReactRevealText from "react-reveal-text";
import { 
    fadeIn,
    fadeInUp,
    fadeInRight,
    fadeInLeft
 } from 'react-animations'


//components
import { Grid, Header, Icon } from "semantic-ui-react"
import { colors }             from "/imports/commons/colors";
import SeparatorJs      from "/imports/components/ui/SeparatorJs";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;



class Landing extends Component {
    state = {
        loading: true
    }
    componentDidMount(){
        this.setState({ loading: false })
    }

    render(){
        const { loading } = this.state;
        const { isMobile } = this.props;
        return(
        <LandingWrapper mounted={!loading} isMobile={isMobile}>
            <Grid centered>
                <Grid.Column width={16}>
                    <Header as="h1" textAlign="center">
                        <span className="wrapper">
                            <div className="first left" >J</div>
                            <div className="second left" >S</div>
                            <div className="middle" >&</div>
                            <div className="second right" >C</div>
                            <div className="first right" >o</div>
                        </span>
                        <Header.Subheader>
                            Association 1901
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column computer={5} tablet={8} mobile={12} >
                    <Header as="h3" textAlign="center" className="first">
                        <ReactRevealText show={!loading} >VULGARISATION</ReactRevealText>
                    </Header>
                    <Header as="h3" textAlign="center" className="second">
                        <ReactRevealText show={!loading} >DIFFUSION</ReactRevealText>
                    </Header>
                    <Header as="h3" textAlign="center" className="third">
                        <ReactRevealText show={!loading} >FORMATION</ReactRevealText>
                    </Header>
                </Grid.Column>
            </Grid>
        </LandingWrapper>
        )
    }
}

export default Landing

const LandingWrapper = styled.div`
    background-color: ${colors.main.yellow};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3.header {
        font-size: ${({ isMobile }) => isMobile ? "1.5rem" : "2rem"};
        text-shadow: 3px 3px 3px rgba(0,0,0,0.4);
        color: ${colors.main.black};
        >div{
            display: flex;
            justify-content: space-between;
        }
    }
    h3.header.first {
        animation: ${({ mounted }) => mounted ? `1s ${fadeInUpAnimation}` : null };
    }
    h3.header.second {
        animation: ${({ mounted }) => mounted ? `2s ${fadeInUpAnimation}` : null };
    }
    h3.header.third {
        animation: ${({ mounted }) => mounted ? `3s ${fadeInUpAnimation}` : null };
    }
    h1.header {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: ${({ isMobile }) => isMobile ? "6rem" : "10rem"};
        font-weight: 700;
        text-shadow: 3px 3px 3px rgba(0,0,0,0.4);
        .sub {
            letter-spacing: 12px;
            animation: 2s ${fadeInAnimation};
            font-size: ${({ isMobile }) => isMobile ? "1.5rem" : "2rem"};
            font-weight: bold;
        }
        .wrapper{
            display: flex;
            justify-content: center;
        }
        .first.left{
            text-align: center;
            padding: 7px;
            animation: 1.5s ${fadeInLeftAnimation};
            color: ${colors.main.black};
        }
        .second.left{
            text-align: center;
            padding: 7px;
            animation: 1s ${fadeInLeftAnimation};
            color: ${colors.main.black};
        }
        .middle{
            text-align: center;
            padding: 7px;
            animation: 1s ${fadeInAnimation};
            color: white;
        }
        .second.right{
            text-align: center;
            padding: 7px;
            animation: 1s ${fadeInRightAnimation};
            color: ${colors.main.black};
        }
        .first.right{
            text-align: center;
            padding: 7px;
            animation: 1.5s ${fadeInRightAnimation};
            color: ${colors.main.black};
        }
    }
`;