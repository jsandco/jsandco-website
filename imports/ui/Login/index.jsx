import { Meteor } from 'meteor/meteor';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Form, Button, Grid } from 'semantic-ui-react';

import Wrapper from './Wrapper';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback((event) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      // no default
    }
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        toast.error(error.reason);
      } else {
        history.push('/connected');
      }
    });
  }, [email, password]);

  return (
    <Wrapper>
      <Grid centered>
        <Grid.Column width={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              name="email"
              type="email"
              required
              placeholder="Adresse email"
              autoComplete="email"
              onChange={handleChange}
              value={email}
            />
            <Form.Input
              name="password"
              type="password"
              required
              placeholder="Mot de passe"
              autoComplete="urrent-password"
              onChange={handleChange}
              value={password}
            />
            <Button type="submit" content="Connexion" />
          </Form>
        </Grid.Column>
      </Grid>
    </Wrapper>
  );
};

export default Login;
