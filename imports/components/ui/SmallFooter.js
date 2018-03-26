import React        from 'react';
import styled       from 'styled-components';

import { Container, Menu, Image } from "semantic-ui-react"
import { colors }       from "/imports/commons/colors";

const SmallFooter = ({ isMobile }) => (
    <FooterWrapper key="footer" isMobile={isMobile} >
      <Menu borderless stackable inverted size="massive" >
        <Container>
          <Menu.Item>
              JS&Co 2018
          </Menu.Item>
          <Menu.Item position="right" >
                Developped and designed by <a href="https://mexar.fr" rel="noopener noreferrer" target="_blank" > MeXaR</a>
          </Menu.Item>
          <Menu.Item position="right" >
                Hosted by
            <Image
              src="/divers/txm_logo.png"
              as="a"
              alt="Logo of TXM"
              size="tiny"
              href="https://techexmachina.com/"
              target="_blank"
            />
          </Menu.Item>
        </Container>
      </Menu>
    </FooterWrapper>
)


export default SmallFooter


const FooterWrapper = styled.div`
margin-top:0px;
>.ui.menu {
    background-color: ${colors.main.black} !important;
    border-radius: 0px !important;
    .item {
        color: ${colors.main.yellow} !important;
        padding: ${({ isMobile }) => isMobile ? null : '3px !important'};
        ${({ isMobile }) => isMobile ? 
        `display: flex;
        justify-content: center;` : null}
        a {
            color: #f8f8f8 !important;
            margin-left: 5px;
        }
    }
}
`;
