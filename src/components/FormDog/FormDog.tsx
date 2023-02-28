import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import  Form  from './formDialog/Form';



interface Props {
    open : boolean
    setOpen : React.Dispatch<React.SetStateAction<boolean>>
}

  
 
const FormDog = ({open , setOpen} : Props) => {
   
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  return (
    
    <div>
     
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle fontWeight='1000' fontSize='23px'>Create your dog breed</DialogTitle>
      <DialogContent>
        <DialogContentText>
        Add to this list of breed dogs , your own breed , either invented or existing ,
         to complete with all existing breeds.
        </DialogContentText>

        <Form />
       
      </DialogContent>
      <DialogActions>
        <Button sx={{color : '#724B7E'}} onClick={handleClose}>Cancel</Button>
   
      </DialogActions>
    </Dialog>
   
  </div>
 
  
    
  )
}

export default FormDog