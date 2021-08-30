import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [playlistModal, setPlaylistModal] = useState(false);

  return (
    <ModalContext.Provider value={{ playlistModal, setPlaylistModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
