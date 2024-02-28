import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsingList } from '../../../Redux/sllices/useings/api';

export default function UsingL(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch()
 
  const usingList=useSelector(s=>s.useing.usings)
  const handleClickOpen = () => {
    dispatch(getAllUsingList(props.id))
    setOpen(true);

  };

  const handleClose = () => {
 
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      לצפייה 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         <div  className='PeopleList'>
        <DialogTitle id="alert-dialog-title">
          {"רשימת שימושים"}
        
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description"> */}
         
            <table>
                <thead>
            <th>תאריך</th>
            <th>שם החנות </th>
            <th>סכום</th>
            </thead>
            <tbody>
            { usingList.map(u=><tr key={u.useingCode}>
           <td>{u.useDate}</td>
           <td>{u.storeName}</td>
           <td>{u.fullAmount}</td>
           </tr>
          )}
          </tbody>
          </table>
          
         {!usingList &&<h1>לא בוצעו שימושים</h1>}
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>אישור</Button>
        
        </DialogActions>  </div>
      </Dialog>
    </React.Fragment>
  );
}