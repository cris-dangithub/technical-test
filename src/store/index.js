import { configureStore } from '@reduxjs/toolkit';
import favorites from './slices/favorites.slice';

export default configureStore({
  reducer: {
    favorites,
  },
});
