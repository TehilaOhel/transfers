import { configureStore } from "@reduxjs/toolkit"
import  transfersReducer  from "./sllices/transfers/transfers"
import  useingsReducer  from "./sllices/useings/useings"

export const store = configureStore({
    reducer: {
        transfer: transfersReducer,
        useing:useingsReducer
    },
})

