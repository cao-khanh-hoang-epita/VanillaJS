// src/components/modals/ThirdModal.jsx
import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { Search } from 'lucide-react';

const ThirdModal = ({ isOpen, onClose }) => {
  const [showSearch, setShowSearch] = useState(false);
  const mountainImage = "/api/placeholder/800/400";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Third title now"
      color="bg-orange-400"
    >
      <h3 className="text-lg font-medium mb-4">This is a special body sub-title</h3>
      <div className="relative group">
        <img 
          src={mountainImage}
          alt="Mountain landscape" 
          className="w-full rounded-lg"
        />
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setShowSearch(!showSearch)}
        >
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </Modal>
  );
};

export default ThirdModal;