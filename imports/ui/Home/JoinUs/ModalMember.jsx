import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Modal, Button, Transition } from 'semantic-ui-react';

const ModalMember = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return (
    <>
      <Fade up>
        <Button className="js-yellow" fluid onClick={toggle}>Devenir Membre</Button>
      </Fade>
      <Transition visible={isVisible} animation="fade">
        <Modal open={isVisible}>
          <Modal.Content>
            <iframe
              title="helloasso"
              id="haWidget"
              allowTransparency
              src="https://www.helloasso.com/associations/js-co/adhesions/adhesion-a-js-co/widget"
              style={{ width: '100%', height: '70vh', border: 'none' }}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="red"
              onClick={toggle}
              content="Fermer"
            />
          </Modal.Actions>
        </Modal>
      </Transition>
    </>
  );
};

export default ModalMember;
