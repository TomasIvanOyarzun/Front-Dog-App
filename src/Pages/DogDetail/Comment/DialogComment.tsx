import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  CommentResponse, useFetchUpdateCommentMutation, userForCommentMath } from '../../../feactures/user/UserSlice';

import Divider from '@mui/material/Divider';
interface Props {
    openDialog : boolean
    setOpenDialog :  React.Dispatch<React.SetStateAction<boolean>>
   
    
     user : CommentResponse
 
}
const DialogComment = ({openDialog, setOpenDialog, user} : Props) => {
   
    const [updating] = useFetchUpdateCommentMutation()
    const handleClickOpen = () => {
      setOpenDialog(true);
    };
  
    const handleClose = () => {
      setOpenDialog(false);
    };
  
    const handleOnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     
        const updatingFix = {
           _id : user._id,
           dog : user.dog,
           user : user.user?._id,
           comment : user.comment,
           like : user.like,
      
            exits : false
           
           
           
        }
       
        updating(updatingFix)

        setOpenDialog(false)
    }
        
  return (
    <Dialog
    open={openDialog}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"delete comment"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      Are you sure you want to delete this comment?
      </DialogContentText>
    </DialogContent>
     <Divider/>
    <DialogActions sx={{margin: '10px'}}>
      <Button onClick={handleOnClick} variant="contained" color='error'>Delete</Button>
      <Button onClick={handleClose} autoFocus>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default DialogComment