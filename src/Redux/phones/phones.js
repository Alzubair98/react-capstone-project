import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const LOADING = 'LOADING';
// const LOAD_IMG = 'LOADIMG';

const url = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
// const firstPageImg = 'https://zoo-animal-api.herokuapp.com/animals/rand';

export const loadPhones = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url).catch((error) => {
    console.log('Error', error);
  });
  const res = response.data;
  const data = res.map((animal) => ({
    name: animal.name,
    img: animal.image_link,
    id: animal.id,
    latinName: animal.latin_name,
    type: animal.animal_type,
    time: animal.active_time,
    life: animal.lifespan,
    home: animal.geo_range,
    place: animal.habitat,
  }));
  return data;
});

// export const loadimg = createAsyncThunk(LOAD_IMG, async () => {
//   const response = await axios.get(firstPageImg).catch((error) => {
//     console.log('Error', error);
//   });
//   return response.data;
// });

const storeSlice = createSlice({
  name: 'Phones',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPhones.fulfilled, (state, action) => action.payload);
    // builder.addCase(loadimg.fulfilled, (state, action) => action.payload);
  },
});

export const dataAction = storeSlice.actions;
export default storeSlice.reducer;
