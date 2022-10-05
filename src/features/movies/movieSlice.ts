import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";
import { initialDetails, initialSearch } from "models/Movie";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (movieText: string) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (seriesText: string) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
  return response.data;
});

export const fetchAsyncDetail = createAsyncThunk("movies/fetchAsyncDetail", async (id: string) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
  return response.data;
});

const initialState = {
  movies: initialSearch,
  shows: initialSearch,
  selected: initialDetails,
  loaded: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelected: (state) => {
      state.selected = initialDetails;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state, { payload }) => {
      console.log("movies pending");
      state.loaded = false;
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("movies fetched");
      state.movies = payload;
      state.loaded = true;
    });
    builder.addCase(fetchAsyncMovies.rejected, (state, { payload }) => {
      console.log("movies rejected");
      state.loaded = true;
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      console.log("shows fetched");
      state.shows = payload;
      state.loaded = true;
    });
    builder.addCase(fetchAsyncDetail.fulfilled, (state, { payload }) => {
      console.log("details fetched");
      state.selected = payload;
      state.loaded = true;
    });
  },
});

export const { addMovies, removeSelected } = movieSlice.actions;

export const getAllMovies = (state: RootState) => state.movies.movies;
export const getAllShows = (state: RootState) => state.movies.shows;
export const getDetails = (state: RootState) => state.movies.selected;

export default movieSlice.reducer;
