import React from 'react';
import Fade from 'react-reveal/Fade';

// components
import { Grid, Header, Container } from 'semantic-ui-react';
import SeparatorJs from '/imports/ui/components/ui/SeparatorJs';

import Wrapper from './Wrapper';
import SingleItem from './SingleItem';
import texts from './texts';

const Partners = () => (
  <Wrapper id="about">
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
          // eslint-disable-next-line react/no-array-index-key
          <SingleItem item={item} key={i} index={i} />
        ))}
      </Grid>
    </Container>
  </Wrapper>
);

export default Partners;
