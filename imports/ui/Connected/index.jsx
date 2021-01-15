import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Form, Button, Grid } from 'semantic-ui-react';

import Wrapper from './Wrapper';

const Connected = () => {
  const [user, setUser] = useState({});

  useTracker(() => {
    const {
      firstname, lastname, photo, isDisplayed,
    } = Meteor.user() || {};
    setUser({
      ...user, firstname, lastname, photo, isDisplayed,
    });
  }, []);

  const handleChange = useCallback((event, { name, value, checked }) => {
    setUser({ ...user, [name]: value || checked });
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    Meteor.call('users.updateProfile', { user }, (error) => {
      if (error) {
        toast.error(error.reason);
      } else {
        toast.success('Vos informations ont été modifiées');
      }
    });
  }, [user]);

  return (
    <Wrapper>
      <Grid centered>
        <Grid.Column width={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Checkbox
              name="isDisplayed"
              label="Je veux apparaître dans l'annuaire des adhérents"
              onChange={handleChange}
              checked={user.isDisplayed}
            />
            <Form.Input
              name="firstname"
              type="text"
              autoComplete="given-name"
              placeholder="Prénom"
              onChange={handleChange}
              value={user.firstname}
            />
            <Form.Input
              name="lastname"
              type="text"
              autoComplete="family-name"
              placeholder="Nom de famille"
              onChange={handleChange}
              value={user.lastname}
            />
            <Button type="submit" content="Sauvegarder" />
            <Button
              color="red"
              type="button"
              content="Se déconnecter"
              onClick={() => Meteor.logout()}
            />
          </Form>
        </Grid.Column>
      </Grid>
    </Wrapper>
  );
};

export default Connected;
