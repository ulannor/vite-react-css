import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import Popup from "./components/Popup";
import PopupContent from "./components/PopupContent";

const App: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false); // ✅ Explicitly typed useState

  const handleOpenPopup = (): void => {
    setPopupOpen(true);
  };

  const handleClosePopup = (): void => {
    setPopupOpen(false);
  };

  return (
    <div className="background">
      <Button onClick={handleOpenPopup}>Расчет платежей</Button>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <PopupContent onClose={handleClosePopup} />
      </Popup>
    </div>
  );
};

export default App;
