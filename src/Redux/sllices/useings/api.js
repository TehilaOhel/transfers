import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../configuration";
import axios from "axios";

export const getAllUsingList = createAsyncThunk(

    // השם של הפעולה
    'usings/getAllUsingList',
 
    async (code) => {
        const response = await axios.get(
            `${BASE_URL}Useing/transferKod?transferKod=${code}`);
            const UsingList = response.data;
  
        // reducerב fullfiled מה שחוזר מהפונקציה יבוא לפונקציה ה 
        // rejected אם זה נכשל אז השגיאה תגיע לפונקציית ה
        return UsingList;
    }
  );