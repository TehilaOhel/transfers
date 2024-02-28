import { useEffect, useState } from "react"
import { Footer } from "./footer"
import { AppHeader } from "./header"
import { useDispatch } from "react-redux"
import { getAllTransferReceiver, getAllTransferSender } from "../Redux/sllices/transfers/api"
import { TransferPage } from "./pages/transfers/TransfersPage"



export const Main = () => {
    const [userId, setUserId]=useState(235454847)

    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(getAllTransferReceiver(userId))
        dispatch(getAllTransferSender(userId))
    }, [])

    return <div>
        <AppHeader></AppHeader>
        <TransferPage />
        <Footer></Footer>
    </div>

}