import React from "react"
import styled, { keyframes } from 'styled-components';

//components
import { Grid, Header } from "semantic-ui-react"
import { colors }             from "/imports/commons/colors";

const SeparatorJs = ({ color = "yellow", marged }) => (
    <SeparatorJsWrapper color={color} marged={marged} >
        <div className="separator">
            <div className="separator-js"></div>
        </div>
    </SeparatorJsWrapper>
)

export default SeparatorJs

const SeparatorJsWrapper = styled.div`
    .separator{
        margin: ${({ marged }) => marged ? 15 : 0 }px auto;
        position: relative;
        width: 132px;
        .separator-js {
            margin: 0 auto;
            position: relative;
            top: -10px;
            width: 22px;
            height: 22px;
            color: #ffffff;
            line-height: 22px;
            text-align: center;
            font-weight: 300;
            border-radius: 50%;
            font-size: 14px;
            background-color: ${({ color }) => color === "yellow" ? colors.main.yellow : colors.main.black};     
        }      
        .separator-js:before {
            content: "&";
            color: ${({ color }) => color === "yellow" ? colors.main.black : colors.main.yellow};     
            font-weight: bold;
        }  
    }
    .separator:before {
        left: 50%;
        margin-left: -66px;
        position: absolute;
        content: '';
        top: 0px;
        width: 132px;
        height: 3px;
        background-color: ${({ color }) => color === "yellow" ? colors.main.yellow : colors.main.black};
    }
`;