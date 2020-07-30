import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Modal, Button, Transition } from 'semantic-ui-react';

const ModalMember = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return (
    <>
      <Fade up>
        <Button
          onClick={toggle}
          content="Devenir Membre"
          className="js-button"
        />
      </Fade>
      <Transition visible={isVisible} animation="fade">
        <Modal open={isVisible} onClose={toggle}>
          <Modal.Content>
            <iframe
              title="helloasso"
              id="haWidget"
              allowTransparency
            // src={helloAssoLink}
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
