import { create } from "zustand";
import axios from "axios";

const VEHICLES_API_URL = "https://667360426ca902ae11b407dc.mockapi.io/movies";
const FAVORITES_API_URL = "https://667360426ca902ae11b407dc.mockapi.io/Favourites";

const useStore = create((set) => ({
  vehicles: [],
  favorites: [],
  status: "idle",
  error: null,

  fetchVehicles: async () => {
    set({ status: "loading" });
    try {
      const response = await axios.get(VEHICLES_API_URL);
      set({ vehicles: response.data, status: "succeeded" });
    } catch (error) {
      console.error("Failed to fetch vehicles", error);
      set({ error: error.message, status: "failed" });
    }
  },

  fetchFavorites: async () => {
    set({ status: "loading" });
    try {
      const response = await axios.get(FAVORITES_API_URL);
      set({ favorites: response.data, status: "succeeded" });
    } catch (error) {
      console.error("Failed to fetch favorites", error);
      set({ error: error.message, status: "failed" });
    }
  },

  addFavorite: async (vehicleId) => {
    try {
      const vehicleResponse = await axios.get(`${VEHICLES_API_URL}/${vehicleId}`);
      const vehicleData = vehicleResponse.data;
      await axios.post(FAVORITES_API_URL, vehicleData);

      const updatedFavoritesResponse = await axios.get(FAVORITES_API_URL);
      set({ favorites: updatedFavoritesResponse.data });
      console.log("Added favorite:", vehicleData);
    } catch (error) {
      console.error("Failed to add favorite", error);
    }
  },

  removeFavorite: async (favoriteId) => {
    try {
      await axios.delete(`${FAVORITES_API_URL}/${favoriteId}`);

      const updatedFavoritesResponse = await axios.get(FAVORITES_API_URL);
      set({ favorites: updatedFavoritesResponse.data });
      console.log("Removed favorite with id:", favoriteId);
    } catch (error) {
      console.error("Failed to remove favorite", error);
    }
  },
}));

export default useStore;
