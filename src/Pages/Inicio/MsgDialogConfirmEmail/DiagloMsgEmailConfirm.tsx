import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';

interface Props {
    error : boolean 
   
}
const DiagloMsgEmailConfirm = ({error} : Props) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        if (error === false) {}
      setOpen(false);
    };

  return (
    <div>
  
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Account confirmation"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {error ?  <Alert variant="filled" severity="error">
        
          We couldn't validate this account because the confirmation token was already verified or doesn't exist
      </Alert> :  <Alert variant="filled" severity="success">
      Thank you for creating an account in DOG APP, we tell you that it is already activated to be able to log in
      </Alert>}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default DiagloMsgEmailConfirm