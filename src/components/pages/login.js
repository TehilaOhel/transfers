import { useNavigate } from "react-router";
import { checkUser } from "../../Redux/sllices/user/api";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Login=()=>{
    const [user, setUser] = useState({
        "id": null,
        "password": null,
   });
  const dispatch = useDispatch();
 const navigate = useNavigate();
 const userNow=useSelector(s=>s.user.user)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setUser({ ...user, [name]: value});
  }

  const handleSubmit = async () => {

   dispatch(checkUser(user))

   if (userNow.id!==""){
navigate('./menu')
   }
   
  }
   

    return (
        <div className='AddPerson'>
          <h2> כניסת משתמש </h2>
          <label>תעודת זהות  <input type="text" name="id" value={user.userName} onChange={handleChange} /></label>
          <label> סיסמה<input type="password" name="password" value={user.password}  onChange={handleChange}  /></label>
          
          <button onClick={handleSubmit}>כניסה</button>
        </div>
      );}