import { createSlice } from '@reduxjs/toolkit';
import Server from '../../server/server';

const serverSlice = createSlice({
  name: 'server',
  initialState: new Server(),
  reducers: {},
});

export default serverSlice.reducer;
