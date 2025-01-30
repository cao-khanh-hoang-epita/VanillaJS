// src/components/modals/SecondModal.jsx
import React from 'react';
import Modal from '../ui/Modal';

const SecondModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Some other cool title now!"
      color="bg-purple-500"
    >
      <p>This is the another text of the body 😄</p>
    </Modal>
  );
};

export default SecondModal;