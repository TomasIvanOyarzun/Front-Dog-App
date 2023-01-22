import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import { changePassword, getUserData, useFetchUserChangePasswordMutation, userActive } from '../../../../feactures/user/UserSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const initialState = {
    pass : '',
     newPassword : ''

}

const error = {
    error : false,
    msg : ''
}

 interface responseError {
    data : {
        error : boolean,
        msg : string
    }
    status : number
 }
const ChangePassword = () => {
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const [updatePassword] = useFetchUserChangePasswordMutation()
    const [input , setInput] = React.useState(initialState)
    const [showPassword, setShowPassword] = React.useState(false);
    const [responseBack , setResponseBack] = React.useState(error)
  

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setInput({
        ...input,
        [e.target.name] : e.target.value
       })
  }

  const handleOnSubmit = (e : React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
        updatePassword({...input, id : user._id}).unwrap().then(response => {
            setResponseBack(response)
            setOpen(true)
        })
        .catch((error : responseError)  => {
            setResponseBack(error.data)
            setOpen(true)
        })
        setInput(initialState)
  } 

  return (
     <>
     {responseBack.error ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        there was an error, 
          the reason : {responseBack.msg}
        </Alert>
      </Snackbar> : 
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      password has been successfully updated
      </Alert>
    </Snackbar>}
    <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
         <FormControl sx={{ width: '100%', margin: '4px 0 4px 0' }} variant="outlined">
          <InputLabel >Current password</InputLabel>
          <OutlinedInput
            name = 'pass'
            value={input.pass}
            onChange={handleOnChange }
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Current password"
          />
        </FormControl>

        <FormControl sx={{ width: '100%', margin: '4px 0 4px 0' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
          <OutlinedInput
             name= 'newPassword'
             value={input.newPassword}
             onChange={handleOnChange}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
          />
        </FormControl>

        <Button type='submit' startIcon={<DataSaverOffIcon/>} sx={{backgroundColor: '#64BE43', border: '1px solid #b0bec5', color: '#fff', fontWeight: 'bold', height: '45px', margin: '10px'}} variant='contained' >Save</Button>
    </form>
    </>
  )
}

export default ChangePassword