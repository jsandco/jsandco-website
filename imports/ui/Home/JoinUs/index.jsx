import React from 'react';
import Fade from 'react-reveal/Fade';

// components
import { Grid, Header, Container } from 'semantic-ui-react';
import SeparatorJs from '/imports/ui/components/ui/SeparatorJs';

import Wrapper from './Wrapper';
import ModalMember from './ModalMember';
import texts from './texts';

const Team = () => (
  <Wrapper id="team">
    <Container>
      <Grid centered relaxed="very" stackable>
        <Grid.Column width={16} style={{ marginBottom: 25 }}>
          <Fade up>
            <Header as="h1" textAlign="center">
              {texts.title}
              <SeparatorJs color="yellow" marged />
              <Header.Subheader>{texts.subtitle}</Header.Subheader>
            </Header>
          </Fade>
        </Grid.Column>
        <Grid.Column width={5}>
          <ModalMember />
        </Grid.Column>
      </Grid>
    </Container>
  </Wrapper>
);

export default Team;
