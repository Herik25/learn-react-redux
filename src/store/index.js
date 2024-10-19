import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // name [song] + / + func nam [addSong]] = song/addSong
    addSong(state, action) {
      state.push(action.payload);
    },
    // song/removeSong
    removeSong(state, action) {},
  },
});

// TODO : Create a movieSlice

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    // TODO : Add movie accesser
  },
});

// console.log(songSlice.actions.addSong());

export { store };
export const addSong = songSlice.actions.addSong;
