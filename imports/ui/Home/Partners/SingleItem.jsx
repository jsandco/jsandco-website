import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Image } from 'semantic-ui-react';

const SingleItem = ({ item }) => (
  <Grid.Column computer={4} tablet={3} mobile={8} className="single-item">
    <Fade up>
      <Image src={item.icon} onClick={() => window.open(item.link)} />
      {/* <Header as='h2' icon textAlign='center'>
                <Header.Content>
                    {item.title}
                </Header.Content>
            </Header> */}
    </Fade>
  </Grid.Column>
);

export default SingleItem;
