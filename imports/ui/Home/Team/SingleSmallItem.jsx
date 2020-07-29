import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Header, Image } from 'semantic-ui-react';

const SingleSmallItem = ({ item, isMobile }) => (
  <Grid.Column computer={3} tablet={3} mobile={13} className="single-small-item-team">
    <Fade up>
      <Image wrapped src={item.picture} size={isMobile ? 'small' : null} centered />
      <Header as="h5" icon textAlign="center">
        <Header.Content>
          {item.name}
        </Header.Content>
      </Header>
    </Fade>
  </Grid.Column>
);

export default SingleSmallItem;
