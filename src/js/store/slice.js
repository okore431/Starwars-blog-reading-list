import { createSlice } from '@reduxjs/toolkit';

const favoriteState = {
    favorites: [], // Setting up an array of objects. We will be passing title + link in here
  };
  
  export const slice = createSlice({
    name: 'favorite',
    initialState: favoriteState, // Utilizing the `initialState` property with the `favoriteState` object
    reducers: {
      addFavorite: (state, action) => {
        const { title, url } = action.payload; 
        state.favorites.push({ title, url }); // Pushing title + link into the favorites array
      },
      deleteFavorite: (state, action) => {
        const { title, url } = action.payload;
        state.favorites = state.favorites.filter(
          (favorite) => favorite.title !== title || favorite.url !== url
        );
      }, // Deleting title + link from the favorites array
    },
  });
  
  export const { addFavorite, deleteFavorite } = slice.actions;
  
  export default slice.reducer;
  