import React from 'react';

const MODAL_COLORS = {
  first: 'bg-green-500',
  second: 'bg-violet-500',
  third: 'bg-yellow-500'
};

const Modal = ({ isOpen, onClose, title, children, variant }) => {
  if (!isOpen) return null;

  const modalColor = MODAL_COLORS[variant];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div 
          className="bg-[#1a1a2e] text-white rounded-lg shadow-xl w-full max-w-2xl mx-4 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${modalColor} p-4 rounded-t-lg flex justify-between items-center`}>
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <button 
              onClick={onClose} 
              className="text-white hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
          <div className={`${modalColor} p-4 rounded-b-lg flex justify-end`}>
            <button
              onClick={onClose}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;