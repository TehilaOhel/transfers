import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../configuration";
import axios from "axios";

export const checkUser = createAsyncThunk(

    // השם של הפעולה
    'user/checkUser',
 
    async (user) => {
        const response = await axios.get(
            `${BASE_URL}users/${user.id}/${user.password}`);
            
            const res = response.data;
  
        // reducerב fullfiled מה שחוזר מהפונקציה יבוא לפונקציה ה 
        // rejected אם זה נכשל אז השגיאה תגיע לפונקציית ה
        return res;
    }
  );