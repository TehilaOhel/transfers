import { createSlice } from '@reduxjs/toolkit'
import { createNewCustomer, editCustomer, getAllTransferReceiver, getAllTransferSender, getAllUsingList, sendThankYouLetterOnServer } from './api';
// איתחול של הסטיט
const initialState = {
    transferIn: [],
    transferOut: [],
    status: "pending",
    statusLetter:"pending"
}

 export const transfersReducer = createSlice({
// שם הסלייס – אסור לשתי סלייסים להיות בעלי אותו שם
  name: 'transfers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        // getAllTransferReceiver - פונקצית ה asyncThunk
        // מחזירה אובייקט שעליו 3 פונקציות
        // 1. לפני שהפעולה הסתיימה - pending לכאן נגיע במצב של
        .addCase(getAllTransferReceiver.pending, (state, action) => {
           state.status = "pending"
        })
        // 2. fulfilled -> הצלחה - לכאן נגע כאשר הפעולה הסתימה בהצלחה
        .addCase(getAllTransferReceiver.fulfilled, (state, action) => {
            state.transferIn = action.payload;
            state.status = "success"
        })
        // 3. לכאן נגיע במקרה של כישלון
        .addCase(getAllTransferReceiver.rejected, (state, action) => {
          state.status = "error"
        })    // 2. fulfilled -> הצלחה - לכאן נגע כאשר הפעולה הסתימה בהצלחה
        .addCase(getAllTransferSender.pending, (state, action) => {
          state.status = "pending"
       })
       // 2. fulfilled -> הצלחה - לכאן נגע כאשר הפעולה הסתימה בהצלחה
       .addCase(getAllTransferSender.fulfilled, (state, action) => {
           state.transferOut = action.payload;
           state.status = "success"
       })
       // 3. לכאן נגיע במקרה של כישלון
       .addCase(getAllTransferSender.rejected, (state, action) => {
         state.status = "error"
       })  
       .addCase(sendThankYouLetterOnServer.pending, (state, action) => {
        state.statusLetter = "pending"
     })
     // 2. fulfilled -> הצלחה - לכאן נגע כאשר הפעולה הסתימה בהצלחה
     .addCase(sendThankYouLetterOnServer.fulfilled, (state, action) => {
      state.statusLetter = action.payload
      console.log(action.payload  )  
   
     })
     // 3. לכאן נגיע במקרה של כישלון
     .addCase(sendThankYouLetterOnServer.rejected, (state, action) => {
       state.statusLetter = "error"
     })  
     
       // 2. fulfilled -> הצלחה - לכאן נגע כאשר הפעולה הסתימה בהצלחה
      
      //   .addCase(editCustomer.fulfilled, (state, action) => {
      //     const index = state.customers.find(c => c.custId === action.payload.custId);
      //     state.customers[index] = action.payload;
      //     state.status = "success"

      // })
},
},
);



// הפונקציה createSlice מחזירה אובייקט שמכיל פונקציות שבהם נשתמש כאשר// נרצה לעשות dispatch// 
// export const { setUserName } = accountSlice.actions

export default transfersReducer.reducer
