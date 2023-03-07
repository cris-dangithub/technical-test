import { createSlice } from '@reduxjs/toolkit';
import Server from '../../server/server';
const server = new Server();

const initialStateFunction = () => {
  if (server.readToken()) return JSON.stringify(server.getFavorites());
  return null;
};

const favoritesSlice = createSlice({
  name: 'favorite',
  initialState: initialStateFunction(),
  reducers: {
    getNewFavorites: state => JSON.stringify(server.getFavorites()),
  },
});

export const { getNewFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
