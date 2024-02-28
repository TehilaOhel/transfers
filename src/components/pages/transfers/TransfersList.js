import { useDispatch, useSelector } from "react-redux"
import {useState } from "react"

import { EditCustomer } from "./edit/edit";
import '../../../personList.css';
import SendThankYouLetter from "./sendThankYouLetter";
import UsingList from "./usingList";
import UsingL from "./using";
import ThankYouLetter from "./ThankYouLetter";

export const TransfersList = () => {



    const allTransfersIn = useSelector(state => state.transfer.transferIn );
    
    const allTransfersOut = useSelector(state => state.transfer.transferOut );
  

    const [editCustomerId, setEditCustomerId] = useState(undefined)
    const [thankYouLetter, setthankYouLetter] = useState(undefined)

    console.log(allTransfersIn)
    console.log(allTransfersOut)

    return <>
    {/* <button onClick={() => setEditCustomerId(undefined)}>closeEdit</button>
    { editCustomerId && <EditCustomer customer={ allCustomers.find(c => c.custId ===  editCustomerId) }></EditCustomer> } */}
   <div  className='PeopleList'>
    <h1> העברות שקבלתי</h1>
     <table dir="rtl" border={1} float="left"> 
        <thead>
          
        <th>תאריך</th>
        <th>שם הנותן</th>
        <th>סכום ראשוני</th>
        <th>יתרה</th>
        <th>לשימוש למטרה:</th>
        <th>מכתב תודה</th>
        <th>שימושים</th>
        </thead>
    <tbody>
       {
        allTransfersIn.map(t => <tr key={t.transferCode}>
            <td>{t.transferDate}</td>
            <td>{t.transferSenderName}</td>
            <td>{t.fullAmount}</td>
            <td>{t.leftOverBalance}</td>
            <td>{t.categoryName}</td>
            <td><SendThankYouLetter id={t.transferCode}></SendThankYouLetter></td>
            <td><UsingL  id={t.transferCode}></UsingL></td>
        </tr>)
       }
        </tbody>
    </table>
    <h1>העברות יוצאות</h1>
    <table dir="rtl" border={1} > 
        <thead>
          
        <th>תאריך</th>
        <th>שם המקבל</th>
        <th>סכום ראשוני</th>
        <th>יתרה</th>
        <th>לשימוש למטרה:</th>
        <th>מכתב תודה</th>
        <th> שימושים</th>
        </thead>
    <tbody>
       {
        allTransfersOut.map(t => <tr key={t.transferCode}>
            <td>{t.transferDate}</td>
            <td>{t.transferReceiverName}</td>
            <td>{t.fullAmount}</td>
            <td>{t.leftOverBalance}</td>
            <td>{t.categoryName}</td>
            <td><ThankYouLetter id={t.transferCode} transferOut={allTransfersOut}></ThankYouLetter></td>
            <td><UsingL  id={t.transferCode}></UsingL></td>
        </tr>)
       }
        </tbody>
    </table>
    </div>
    </>


    
}