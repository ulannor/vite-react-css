import React from "react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
