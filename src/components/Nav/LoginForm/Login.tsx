import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFetchAuthenticateUserMutation, useFetchDataUserQuery, userActive} from '../../../feactures/user/UserSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/toolkitHooks';
import Alert from '@mui/material/Alert';
import { Typography } from '@mui/material';
import { Link as LinkRouter} from 'react-router-dom';
import { useWidthScreen } from '../../../hooks/customHooks';
import { red } from '@mui/material/colors';
import Link from '@mui/material/Link';

interface Props {
    openOut : boolean
    setOpenOut : React.Dispatch<React.SetStateAction<boolean>>
}

const initialErrorState = {
  status : 0,
  data : {
    msg : ''
  }

}
const initialState = {
  email : '',
  password : ''
}

const initalStateEmail = {
  email : ''
}
const Login = ({openOut, setOpenOut} : Props) => {
  const [sendEmail , setSendEmail] = React.useState(false)
  const [responseBack , setResponseBack] = React.useState(initialErrorState)
  const dispatch = useAppDispatch()

  const [login, result] = useFetchAuthenticateUserMutation()
    const [input, setInput] = React.useState(initialState)
    const [inputForgotPasswordEmail, setInputForgotPasswordEmila] = React.useState(initalStateEmail)
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
           
          login(input).unwrap().then()
          .catch(error => setResponseBack(error))
          setInput(initialState)
    }
    
  
    const handleOnChangeForgotPassword = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputForgotPasswordEmila({
        ...handleClickShowPassword,
         email : e.target.value
      })
    }
   
    const handleOnSubmitForgoPassword = (e : React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()

    }


   React.useEffect(() => {

        if(isSuccess) {
    
          localStorage.setItem('user', JSON.stringify(data))
          setOpenOut(false);
          dispatch(userActive(true))
        }
   },[data])


  console.log(sendEmail)
  return (
      
       <>
   
       {sendEmail === false ? 
       <Dialog open={openOut} onClose={handleClose}   >
       <Box display='flex' justifyContent='center'   >
           <Box display='flex' flexDirection='column' width='100%'  >
           
          
                
               <DialogTitle color='#464646'  sx={{fontSize: '32px', fontWeight: 'bold' }}>Sing Up</DialogTitle> 
           </Box>

       </Box >
        
       
       <Box sx={{display : 'flex', justifyContent: 'center'}}>
       <DialogContent>
       
      <DialogContentText>
        If you do not have an account you can register where it says Create an account.
         </DialogContentText> 

         <Box width='100%' display='flex' flexDirection='column' alignItems='center'>
          {result.isError &&
            <Box width={width > 600 ? '80%' : '100%'}  margin='5px 0 5px 0'>
           
         <Alert  severity="error" variant="filled" sx={{ width: '100%', bgcolor : red[500] }}>
           error , reason : {responseBack.data.msg}
         </Alert>
     
            </Box>
          }
      
           
         <form style={{ width: '100%', height:'200px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }} onSubmit={handleOnsubmit}>
        <Box sx={{width: width > 600 ? '80%' : '100%', height:'200px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
       
         <FormControl variant="standard" fullWidth>
       <InputLabel  >
         Email
       </InputLabel>
       <Input
         name='email'
         value={input.email}
         onChange={handleOnChange}
       
         startAdornment={
           <InputAdornment position="start">
             <MailOutlineIcon />
           </InputAdornment>
         }
       />
     </FormControl>
     <FormControl fullWidth  variant="standard"  >
         <InputLabel  htmlFor="standard-adornment-password">Password</InputLabel>
         <Input
           name='password'
           value={input.password}
           onChange={handleOnChange}
           type={showPassword ? 'text' : 'password'}
           
          
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
       <Link onClick={() => setSendEmail(true)} >forgot password?</Link>
       </Box>
        <Box width='100%'>
        <Button  sx={{backgroundColor: '#64BE43', boxShadow: 'none'}} fullWidth type='submit' variant="contained" endIcon={<SendIcon />}>LOGIN</Button>

         
         </Box>
      
        </Box>
        </form>
        </Box>
       </DialogContent>

       </Box>
       <DialogActions>
         <Box sx={{width: '100%', display: 'flex', margin: '20px', justifyContent: 'center'}} >
           <Typography color='gray' fontSize='15px' marginRight='5px'>no account?</Typography>
           <LinkRouter onClick={() => setOpenOut(false)} style={{textDecoration: 'none', color: '#1976d2', fontSize: '15px'}} to='/register'>Create an account</LinkRouter>
         </Box>
        

         
       </DialogActions>
       
       
     </Dialog> :

<Dialog open={openOut} onClose={handleClose}   >
<Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'   >
<DialogTitle color='#464646'  sx={{fontSize: '32px', fontWeight: 'bold' }}>recover account</DialogTitle>
  <Box width='80%'>
  <DialogContentText>
          You must enter the email of the account you want to recover.
         </DialogContentText>  
  </Box>
<form style={{ width: '100%', height:'200px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }} onSubmit={handleOnsubmit}>
        <Box sx={{width: '80%' , height:'200px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
       
         <FormControl variant="standard" fullWidth>
       <InputLabel  >
         Email
       </InputLabel>
       <Input
         name='email'
         value={inputForgotPasswordEmail.email}
         onChange={handleOnChangeForgotPassword}
       
         startAdornment={
           <InputAdornment position="start">
             <MailOutlineIcon />
           </InputAdornment>
         }
       />
     </FormControl>
     
       <Box width='100%'>
       
       </Box>
        <Box width='100%'>
        <Button  sx={{backgroundColor: '#64BE43', boxShadow: 'none'}} fullWidth type='submit' variant="contained" endIcon={<SendIcon />}>SEND</Button>

         
         </Box>
      
        </Box>
        </form>


</Box>
  

</Dialog>
      }
      
      </>
  )
}

export default Login