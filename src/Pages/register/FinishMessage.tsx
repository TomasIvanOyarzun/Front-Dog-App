import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { green ,red } from '@mui/material/colors';
import { AlertColor } from '@mui/material/Alert';
interface Props {
 
     email? : string
     msgBackError? : string
     type : AlertColor

  }
const FinishMessage = ({ type, email , msgBackError} : Props) => {
      
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      if(type === 'error') window.location.reload()
    };
  
  return (
    <div>
    
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {type === 'error' ? "oh it seems there is a problem :C" : "Thank you for registering on our page."}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
        <Alert variant="filled" severity= {type} sx={{bgcolor: type === 'error' ? red[500] : green[500]}}>
        {type === 'error' ? `We could not register this account , apparently there was an error , the reason : ${msgBackError}`
         : `Thank you for registering , to be able to use your account you will have to activate it , that is why we sent you an email ${email}`}
      </Alert>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          close
        </Button>
        
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default FinishMessage