import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Header, Image } from 'semantic-ui-react';

const SingleItem = ({ item, index }) => (
  <Grid.Column computer={5} tablet={8} mobile={13} className="single-item">
    <Fade
      left={index === 0 || index === 3}
      right={index === 2 || index === 5}
    >
      <Header as="h2" icon textAlign="center">
        <Image src={item.icon} />
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
