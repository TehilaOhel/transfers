import { createSlice } from '@reduxjs/toolkit'
import { getAllUsingList } from './api'

// איתחול של הסטיט
const initialState = {
    usings:[],
    status: "pending"
}

 export const useingsReducer = createSlice({
// שם הסלייס – אסור לשתי סלייסים להיות בעלי אותו שם
  name: 'useings',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllUsingList.pending, (state, action) => {
        state.status = "pending"
     })
     // 2. fulfilled -> הצלחה - לכאן נגע כאשר הפעולה הסתימה בהצלחה
     .addCase(getAllUsingList.fulfilled, (state, action) => {
      state.status = "success"
      console.log(action.payload  ) 
      state.usings = action.payload;
   
     })
     // 3. לכאן נגיע במקרה של כישלון
     .addCase(getAllUsingList.rejected, (state, action) => {
       state.status = "error"
     })  
    } ,}) 

    export default useingsReducer.reducer