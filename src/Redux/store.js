import { configureStore } from "@reduxjs/toolkit"
import  transfersReducer  from "./sllices/transfers/transfers"
import  useingsReducer  from "./sllices/useings/useings"
import  userReducer  from "./sllices/user/user"

export const store = configureStore({
    reducer: {
        user:userReducer,
        transfer: transfersReducer,
        useing:useingsReducer
    },
})

