import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { FailedConnectToDB } from "../../shared/failedConnectToDB"
import { Spinner } from "../../shared/sppiner."
import  { AddCustomer } from "./add/add"
import { TransfersList } from "./TransfersList"
import { getAllTransferReceiver, getAllTransferSender } from "../../../Redux/sllices/transfers/api"

export const TransferPage = () => {
    const userId=useSelector(s=>s.user.user.id)

    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(getAllTransferReceiver(userId))
        dispatch(getAllTransferSender(userId))
    }, [])

    const status = useSelector(s=>s.transfer.status)
     
    const [ isAddOpen, setIsAddOpen] = useState();

    function closeAddPanel() {
        setIsAddOpen(false);
    }
    return <>
        <button onClick={() => {setIsAddOpen(prev => !prev)}}>Add Person</button>
        <button onClick={closeAddPanel}>close</button>

        {isAddOpen &&  <AddCustomer  closeMe={closeAddPanel}/> }
       { status == 'error' && <FailedConnectToDB />}
       { status == 'pending' && <Spinner />}
       { status == 'success' && <TransfersList />}
       


    </>
}