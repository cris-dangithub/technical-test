import { configureStore } from '@reduxjs/toolkit';
import server from './slices/server.slice';

export default configureStore({
  reducer: {
    server,
  },
});
