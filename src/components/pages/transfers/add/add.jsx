

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCustomer } from '../../../../Redux/sllices/transfers/api';
export  const AddCustomer = (props) => {
  const [newCustomer, setNewCustomer] = useState({
        "fullName": "יצחק לוי",
        "custAddress": null,
        "custCity": "ירושלים",
        "custPhone": null,
        "custFax": null,
        "empId": "123456888",
        "employeeName": "אברהםלוי"
   });
  const dispatch = useDispatch();


  

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value)
    setNewCustomer({ ...newCustomer, [name]: value});
  };

      // {
    //     "custId": 66,
    //     "fullName": "יצחק לוי",
    //     "custAddress": null,
    //     "custCity": "ירושלים",
    //     "custPhone": null,
    //     "custFax": null,
    //     "empId": "123456888",
    //     "employeeName": "אברהםלוי"
    // }

  const handleSubmit = async () => {

     dispatch(createNewCustomer(newCustomer))
    props.closeMe()
    // setNewCustomer({ });
    

  
  };

  return (
    <div className='AddPerson'>
      <h2>הוספת Person חדש</h2>
      <label>שם: <input type="text" name="name" value={newCustomer.name} onChange={handleChange} /></label>
      <label> כתובת<input type="text" name="custAddress" value={newCustomer.custAddress}  onChange={handleChange}  /></label>
      <label>עיר <input type="text" name="custCity" value={newCustomer.custCity}   onChange={handleChange} /></label>
      <label>שם העובד<input type="text" name="employeeName" value={newCustomer.employeeName}  onChange={handleChange}   /></label>
      <button onClick={handleSubmit}>הוסף</button>
    </div>
  );
};

