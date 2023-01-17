import React from 'react'
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useFetchAuthenticateUserMutation, useFetchDataUserQuery, userActive} from '../../../feactures/user/UserSlice';
import { useAppDispatch } from '../../../hooks/toolkitHooks';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useWidthScreen } from '../../../hooks/customHooks';


interface Props {
    openOut : boolean
    setOpenOut : React.Dispatch<React.SetStateAction<boolean>>
}

const initialState = {
  email : '',
  password : ''
}
const Login = ({openOut, setOpenOut} : Props) => {
    
  const dispatch = useAppDispatch()
  const [login, result] = useFetchAuthenticateUserMutation()
    const [input, setInput] = React.useState(initialState)
    const {width } = useWidthScreen()
    
    const {data, isSuccess} = useFetchDataUserQuery(result.data?.token)
   
    console.log(data)
    const handleClose = () => {
      setOpenOut(false);

    };

    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
          setInput({
            ...input,
            [e.target.name] : e.target.value
          })

          
    }
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    console.log(input)

    const handleOnsubmit =  (e : React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
           
          login(input)
          setInput(initialState)
    }

   React.useEffect(() => {
  
        if(isSuccess) {
    
          localStorage.setItem('user', JSON.stringify(data))
          setOpenOut(false);
          dispatch(userActive(true))
        }
   },[data])

  
  return (
      
       <>
   
      <Dialog open={openOut} onClose={handleClose}  >
        <Box display='flex' justifyContent='center'   >
            <Box display='flex' flexDirection='column' alignItems='center'  >
            
            <Avatar
            alt="Remy Sharp"
            
             sx={{ width: 84, height: 84 , marginTop: '20px'}}
               >
                   <AccountCircleIcon style={{fontSize: '80px'}} fontSize='large' /> 
                </Avatar>
                <DialogTitle color='#666'  sx={{fontSize: '32px', fontWeight: 'bold' }}>Sing Up</DialogTitle> 
            </Box>

        </Box >
        
        
        <Box sx={{display : 'flex', justifyContent: 'center' }}>
        <DialogContent>
        
          { result.isError  ? <Alert variant="filled" severity="error">
  <AlertTitle>Error</AlertTitle>
  incorrect credentials or user does not exist<strong>, check it out!</strong>
</Alert> : <DialogContentText>
Log in to create dog breeds and have access to more content on the page.
</DialogContentText> }



       

          <form style={{ width: '100%', height:'200px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }} onSubmit={handleOnsubmit}>
         <Box sx={{width: width > 600 ? '80%' : '100%', height:'200px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
          
          <FormControl variant="standard" fullWidth>
        <InputLabel color='success' >
          Email
        </InputLabel>
        <Input
          name='email'
          value={input.email}
          onChange={handleOnChange}
          color="success"
          startAdornment={
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl fullWidth  variant="standard">
          <InputLabel color='success' htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            name='password'
            value={input.password}
            onChange={handleOnChange}
            type={showPassword ? 'text' : 'password'}
            color="success"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
         <Box width='100%'>
         <Button  sx={{backgroundColor: '#58f09b', backgroundImage: 'linear-gradient(45deg, #58f09b 0%, #06812f 100%)', boxShadow: 'none'}} fullWidth type='submit' variant="contained" endIcon={<SendIcon />}>LOGIN</Button>

          
          </Box>
       
         </Box>
         </form>
        </DialogContent>

        </Box>
        <DialogActions>
          <Box sx={{width: '100%', display: 'flex', margin: '20px', justifyContent: 'center'}} >
            <Typography color='gray'>You do not have an account ?</Typography>
            <Link onClick={() => setOpenOut(false)} style={{textDecoration: 'none', color: '#1976d2'}} to='/register'>Create an account</Link>
          </Box>
         
 
          
        </DialogActions>
        
        
      </Dialog>
      
      </>
  )
}

export default Login