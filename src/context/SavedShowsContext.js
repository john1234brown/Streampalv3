import React, { createContext, useState, useCallback } from 'react';

export const SavedShowsContext = createContext({
  updateSavedShows: false,
  toggleSavedShowsUpdate: () => {}
});

export const SavedShowsProvider = ({ children }) => {
  const [updateSavedShows, setUpdateSavedShows] = useState(false);

  const toggleSavedShowsUpdate = useCallback(() => {
    setUpdateSavedShows(prevState => !prevState);
  }, []);

  return (
    <SavedShowsContext.Provider value={{ updateSavedShows, toggleSavedShowsUpdate }}>
      {children}
    </SavedShowsContext.Provider>
  );
};