import { createSlice } from '@reduxjs/toolkit'
import { checkUser } from './api'

// איתחול של הסטיט
const initialState = {
    user:{id: '', name: "", phone: "", email: "", password: ""},
    status: "pending"
}

 export const userReducer = createSlice({
// שם הסלייס – אסור לשתי סלייסים להיות בעלי אותו שם
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(checkUser.pending, (state, action) => {
        state.status = "pending"
     })
     // 2. fulfilled -> הצלחה - לכאן נגע כאשר הפעולה הסתימה בהצלחה
     .addCase(checkUser.fulfilled, (state, action) => {
      state.status = "success"
      console.log(action.payload  ) 
      state.user = action.payload;
   
     })
     // 3. לכאן נגיע במקרה של כישלון
     .addCase(checkUser.rejected, (state, action) => {
       state.status = "error"
     })  
    } ,}) 

    export default userReducer.reducer