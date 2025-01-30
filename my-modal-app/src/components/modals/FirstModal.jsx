import React from 'react';
import Modal from '../ui/Modal';

const FirstModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="The first title is here !"
      variant="first"
    >
      <p>This is the first button body !</p>
    </Modal>
  );
};

export default FirstModal;