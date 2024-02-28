import { useSelector } from "react-redux"
import { useState } from "react"
import { FailedConnectToDB } from "../../shared/failedConnectToDB"
import { Spinner } from "../../shared/sppiner."
import  { AddCustomer } from "./add/add"
import { TransfersList } from "./TransfersList"

export const TransferPage = () => {

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