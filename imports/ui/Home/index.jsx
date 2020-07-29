import React from 'react';

// components
import Landing from './Landing';
import About from './About';
import Team from './Team';
import Contacts from './Contacts';
import Partners from './Partners';
import JoinUs from './JoinUs';

const Home = (props) => (
  <>
    <Landing {...props} />
    <About {...props} />
    <Team {...props} />
    <Contacts {...props} />
    <Partners {...props} />
    <JoinUs {...props} />
  </>
);

export default Home;
