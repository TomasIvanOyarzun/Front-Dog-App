import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


import DialogContentText from '@mui/material/DialogContentText';
import ImageDog from '../../Pages/DogDetail/imageDog/ImageDog';
import ChangeImage from '../../Pages/Profile/ChangeImage';
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
      <DialogTitle fontWeight='1000'>Create your dog breed</DialogTitle>
      <DialogContent>
        <DialogContentText>
        Add to this list of breed dogs , your own breed , either invented or existing ,
         to complete with all existing breeds.
        </DialogContentText>

        <Form />
       
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
   
      </DialogActions>
    </Dialog>
  </div>
    
  )
}

export default FormDog