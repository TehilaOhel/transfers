import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../configuration";
import axios from "axios";
import { useState } from "react";


export const getAllTransferReceiver = createAsyncThunk(

    // השם של הפעולה
    'transfers/getAllTransferIn',
    // שנשלח מהקומפוננטה TransferIn לכאן מגיע ה 
    async (userId) => {
        const response = await axios.get(
            `${BASE_URL}Transfer/TransferReceiverId?TransferReceiverId=${userId}`);

            const TransferReceiver = response.data;
  
        // reducerב fullfiled מה שחוזר מהפונקציה יבוא לפונקציה ה 
        // rejected אם זה נכשל אז השגיאה תגיע לפונקציית ה
        return TransferReceiver;
    }
  );
 

  export const getAllTransferSender = createAsyncThunk(

    // השם של הפעולה
    'transfers/getAllTransferOut',
    // שנשלח מהקומפוננטה transfersOut לכאן מגיע ה 
    async (userId) => {
        const response = await axios.get(
            `${BASE_URL}Transfer/TransferSenderId?TransferSenderId=${userId}`);

            const TransferSender = response.data;
  
        // reducerב fullfiled מה שחוזר מהפונקציה יבוא לפונקציה ה 
        // rejected אם זה נכשל אז השגיאה תגיע לפונקציית ה
        return TransferSender;
    }
  );
 
  export const sendThankYouLetterOnServer = createAsyncThunk(

    // השם של הפעולה
    'transfers/sendThankYouLetter',
    // שנשלח מהקומפוננטה transferCode לכאן מגיע ה 
    async (obj) => {
        debugger;
        const response = await axios.put(
            `${BASE_URL}Transfer/${obj.letter}/${obj.code}`);

            const respons = response.data;
  
        // reducerב fullfiled מה שחוזר מהפונקציה יבוא לפונקציה ה 
        // rejected אם זה נכשל אז השגיאה תגיע לפונקציית ה
        return respons;
    }
  );
 
  

  export const createNewCustomer = createAsyncThunk(

    // השם של הפעולה
    'customers/create',
    // שנשלח מהקומפוננטה person לכאן מגיע ה 
    async (customer) => {
        const response = await axios.post(
            `${BASE_URL}/Cust`,  customer);

            const customerCreated = response.data;
  
        // reducerב fullfiled מה שחוזר מהפונקציה יבוא לפונקציה ה 
        // rejected אם זה נכשל אז השגיאה תגיע לפונקציית ה
        return customerCreated;
    }
  );

//   export const editCustomer = createAsyncThunk(

//     // השם של הפעולה
//     'customers/edit',
//     // שנשלח מהקומפוננטה person לכאן מגיע ה 
//     async (customer) => {
//         const response = await axios.put(
//             `${BASE_URL}/Cust/${customer.custId}`,  customer);

//             const customerCreated = response.data;
  
//         // reducerב fullfiled מה שחוזר מהפונקציה יבוא לפונקציה ה 
//         // rejected אם זה נכשל אז השגיאה תגיע לפונקציית ה
//         return customerCreated;
//     }
//   );