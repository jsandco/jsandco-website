import styled, { css, keyframes } from 'styled-components';
import colors from '/imports/commons/colors';
import {
  fadeIn,
  fadeInUp,
  fadeInRight,
  fadeInLeft,
} from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const Wrapper = styled.div`
    background-color: ${colors.main.yellow};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3.header {
        font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : '2rem')};
        text-shadow: 3px 3px 3px rgba(0,0,0,0.4);
        color: ${colors.main.black};
        >div{
            display: flex;
            justify-content: space-between;
        }
    }
    h3.header.first {
        animation: ${({ mounted }) => (mounted ? css`1s ${fadeInUpAnimation}` : null)};
    }
    h3.header.second {
        animation: ${({ mounted }) => (mounted ? css`2s ${fadeInUpAnimation}` : null)};
    }
    h3.header.third {
        animation: ${({ mounted }) => (mounted ? css`3s ${fadeInUpAnimation}` : null)};
    }
    h1.header {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: ${({ isMobile }) => (isMobile ? '6rem' : '10rem')};
        font-weight: 700;
        text-shadow: 3px 3px 3px rgba(0,0,0,0.4);
        .sub {
            letter-spacing: 12px;
            animation: 2s ${fadeInAnimation};
            font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : '2rem')};
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

export default Wrapper;
