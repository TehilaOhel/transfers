import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ThankYouLetter(props) {
  const [open, setOpen] = React.useState(false);
  const [thankYouLetter, setthankYouLetter] = React.useState(undefined)
  const showthankYouLetter=(code)=>{
    const letter=props.transferOut.find(t=>t.transferCode==code).thankYouLetter
    setthankYouLetter(letter)
    }
  const handleClickOpen = () => {

    setOpen(true);
    showthankYouLetter(props.id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      לצפייה במכתב
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"מכתב תודה"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {thankYouLetter}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>אישור</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}