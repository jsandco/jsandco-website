import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Header, Image } from 'semantic-ui-react';

const SingleItem = ({ item, index, isMobile }) => (
  <Grid.Column computer={5} tablet={5} mobile={13} className="single-item-team">
    <Fade left={index === 0} right={index === 2}>
      <Image wrapped src={item.icon} size={isMobile ? 'small' : null} centered />
      <Header as="h3" icon textAlign="center">
        <Header.Content>
          {item.title}
          <Header.Subheader>
            {item.description}
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Fade>
  </Grid.Column>
);

export default SingleItem;
