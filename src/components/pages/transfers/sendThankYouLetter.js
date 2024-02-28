import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { sendThankYouLetterOnServer } from '../../../Redux/sllices/transfers/api';
import { useDispatch, useSelector } from 'react-redux';


export default function SendThankYouLetter(props) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus]=React.useState(undefined)
const dispatch=useDispatch()
const selector=useSelector()
// const selector=useSelector()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
       לשליחת מכתב תודה
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const letter = formJson.letter;
            const obj={letter:letter, code:props.id}
            dispatch(sendThankYouLetterOnServer(obj));
            // setStatus(selector(s=>s.transfer.statusLetter))
            if(status==true)
            handleClose();
            
          },
        }}
      >
        <DialogTitle>נא הכנס את המכתב שברצונך לשלוח:</DialogTitle>
       
        <TextField
          id="outlined-multiline-flexible"
          label="ברצוני להודות על.."
          name='letter'
          maxRows={8}
          required
        />
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit">שליחת המכתב</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}