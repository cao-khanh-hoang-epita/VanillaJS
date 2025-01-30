// src/pages/Home.jsx
import React, { useState } from 'react';
import Button from '../components/ui/Button';
import FirstModal from '../components/modals/FirstModal';
import SecondModal from '../components/modals/SecondModal';
import ThirdModal from '../components/modals/ThirdModal';

const Home = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8">
      <h1 className="text-white text-4xl mb-8">This is a test title</h1>
      
      <div className="space-x-4">
        <Button
          variant="first"
          onClick={() => setActiveModal('first')}
        >
          First Button
        </Button>
        
        <Button
          variant="second"
          onClick={() => setActiveModal('second')}
        >
          Second button
        </Button>
        
        <Button
          variant="third"
          onClick={() => setActiveModal('third')}
        >
          Third button
        </Button>
      </div>

      <FirstModal 
        isOpen={activeModal === 'first'} 
        onClose={() => setActiveModal(null)} 
      />
      <SecondModal 
        isOpen={activeModal === 'second'} 
        onClose={() => setActiveModal(null)} 
      />
      <ThirdModal 
        isOpen={activeModal === 'third'} 
        onClose={() => setActiveModal(null)} 
      />
    </main>
  );
};

export default Home;