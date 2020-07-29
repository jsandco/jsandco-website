import React, { useMemo } from 'react';
import Fade from 'react-reveal/Fade';

// components
import { Grid, Header, Container } from 'semantic-ui-react';
import SeparatorJs from '/imports/ui/components/ui/SeparatorJs';

import Wrapper from './Wrapper';
import SingleItem from './SingleItem';
import SingleSmallItem from './SingleSmallItem';
import texts from './texts';

const Team = () => {
  const isMobile = useMemo(() => window.innerWidth < 720, []);

  return (
    <Wrapper id="team">
      <Container>
        <Grid centered relaxed="very">
          <Grid.Column width={16} style={{ marginBottom: 25 }}>
            <Fade up>
              <Header as="h1" textAlign="center">
                {texts.title}
                <SeparatorJs color="yellow" marged />
                <Header.Subheader>{texts.subtitle}</Header.Subheader>
              </Header>
            </Fade>
          </Grid.Column>
          { texts.items.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SingleItem item={item} key={i} index={i} isMobile={isMobile} />
          ))}
          <Grid.Column width={16}>
            <Fade>
              <SeparatorJs color="yellow" />
            </Fade>
          </Grid.Column>
          { texts.others.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SingleSmallItem item={item} key={i} index={i} isMobile={isMobile} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Team;
