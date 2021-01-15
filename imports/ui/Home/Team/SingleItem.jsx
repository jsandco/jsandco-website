import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Header, Image } from 'semantic-ui-react';
import { ROLES } from '/imports/commons/enums';

const SingleItem = ({ item, index, isMobile }) => {
  const [firstLetter, ...otherLetters] = item.firstname;
  return (
    <Grid.Column computer={5} tablet={5} mobile={13} className="single-item-team">
      <Fade left={index === 0} right={index === 2}>
        <Image wrapped src={item.photo} size={isMobile ? 'small' : null} centered />
        <Header as="h3" icon textAlign="center">
          <Header.Content>
            {firstLetter.toUpperCase()}
            {otherLetters.join('').toLowerCase()}
            {' '}
            {item.lastname.toUpperCase()}
            <Header.Subheader>
              {ROLES[item.role]}
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Fade>
    </Grid.Column>
  );
};

export default SingleItem;
