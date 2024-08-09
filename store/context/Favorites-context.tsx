import { createContext, ReactNode, useState } from "react";

type FavoritesContextType = {
  ids: any[];
  addFavorite: (id: any) => void;
  removeFavorite: (id: any) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: (id: any) => {},
  removeFavorite: (id: any) => {},
});

type FavoritesContextProviderProps = {
  children: ReactNode;
};
function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
  const [favoritesScreen, setFavoritesScreen] = useState<any[]>([]);

  function addFavorite(id: any) {
    setFavoritesScreen((currentID) => [...currentID, id]);
  }

  function removeFavorite(id: any) {
    setFavoritesScreen((currentID) => currentID.filter((item) => item !== id));
  }
  const values = {
    ids: favoritesScreen,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
