import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { green } from '@mui/material/colors';
interface Props {
   responseBack : {
    error : boolean 
    msg : string
   }
}
const DiagloMsgEmailConfirm = ({responseBack} : Props) => {
 console.log('desde el otro componente' , responseBack)
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      
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
          {responseBack.error ?  <Alert variant="filled" severity="error">
        
          We couldn't validate this account because the confirmation token was already verified or doesn't exist
      </Alert> :  <Alert variant="filled" severity="success" sx={{bgcolor: green[500]}}>
      Thank you for creating an account in DOG APP, we tell you that it is already activated to be able to log in
      </Alert>}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
     
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default DiagloMsgEmailConfirm