import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast} from 'react-toastify';

axios.defaults.baseURL = "https://646230fb185dd9877e4d9158.mockapi.io/contacts";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (p, {rejectWithValue}) => {
    try {
        const response = await axios.get("/users", {
            params: {
                page: p,
                limit: 3,
                completed: false,
            }
          });

         if (response.data.length < 3) {
            toast.error("Soryy! No more users", {
                position: toast.POSITION.TOP_RIGHT
              });
            return rejectWithValue("No more users");
         }
    
          return response.data;

    } catch (error) {
        toast.error("Something went wrong! Please try again later", {
            position: toast.POSITION.TOP_RIGHT
          });
        return rejectWithValue(error.message);
    }
});