import React, { useState, useMemo, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import ReactRevealText from 'react-reveal-text';
import { Link } from 'react-router-dom';
import { Grid, Header, Button } from 'semantic-ui-react';

import Wrapper from './Wrapper';
import ModalMember from './ModalMember';
import Actions from './Actions';

const Landing = () => {
  const [loading, setLoading] = useState(true);

  const isMobile = useMemo(() => window.innerWidth < 720, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div itemScope itemType="http://schema.org/Organization">
      <Wrapper mounted={!loading} isMobile={isMobile}>
        <Grid centered>
          <Grid.Column width={16}>
            <Header as="h1" textAlign="center" itemProp="name">
              <span className="wrapper">
                <div className="first left">J</div>
                <div className="second left">S</div>
                <div className="middle">&</div>
                <div className="second right">C</div>
                <div className="first right">o</div>
              </span>
              <Header.Subheader>
                Association 1901
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column computer={5} tablet={8} mobile={12}>
            <Header as="h3" textAlign="center" className="first">
              <ReactRevealText show={!loading}>VULGARISATION</ReactRevealText>
            </Header>
            <Header as="h3" textAlign="center" className="second">
              <ReactRevealText show={!loading}>DIFFUSION</ReactRevealText>
            </Header>
            <Header as="h3" textAlign="center" className="third">
              <ReactRevealText show={!loading}>FORMATION</ReactRevealText>
            </Header>
          </Grid.Column>
          <Grid.Row>
            <Actions>
              <ModalMember />
              <Fade up>
                <Button
                  as={Link}
                  to="/login"
                  content="Déjà membre ? Connectez-vous !"
                  className="js-button"
                />
              </Fade>
            </Actions>
          </Grid.Row>
        </Grid>
      </Wrapper>
    </div>
  );
};

export default Landing;
