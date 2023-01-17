import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { errorInput, form } from './controlForm';
import Typography from '@mui/material/Typography';
import { useWidthScreen } from '../../../hooks/customHooks';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';

 type changeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  interface Props {
    error : form
    setError : React.Dispatch<React.SetStateAction<form>>
    input : form
    setInput : React.Dispatch<React.SetStateAction<form>>
  }
  


  declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  
    interface Palette {
      neutral: Palette['primary'];
    }
  
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  
    interface PaletteColor {
      darker?: string;
    }
  
    interface SimplePaletteColorOptions {
      darker?: string;
    }
  
    interface ThemeOptions {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  }
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: green[500],
        darker: '#053e85',
      },
      neutral: {
        main: '#9CFF98',
        contrastText: '#fff',
      },
    },
  });
const FormRegister = ({error, setError, input, setInput}: Props) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const {width} = useWidthScreen()
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
   
  
    const handleOnChange = (e : changeEvent ) => {
       setInput({
        ...input,
        [e.target.name] : e.target.value
       })

       setError(errorInput({
        ...input, [e.target.name]: e.target.value
      }))
    }
 
    
 
  return (
    <div>

<ThemeProvider theme={theme}>
          
    <Box sx={{display: 'flex' , justifyContent: 'center', flexWrap: 'wrap'}}>
<FormControl sx={{m: 1, width :width > 550 ? '70%' : '100%' }}>   
    <TextField
      error={error.name.length > 0}
    
      label="Name"
      defaultValue="Your name"
       name='name'
       color={error.name.length > 0 ? 'error' : 'primary'}
       value={input.name}
       onChange={handleOnChange}
    />
     {error.name.length > 0 && <Typography color='red'>{error.name}</Typography>}
     </FormControl>

     <FormControl  sx={{ m: 1,  width :width > 550 ? '70%' : '100%' }}>
     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
             error={error.password.length > 0}
            id="outlined-adornment-password"
            name='password'
            color={error.password.length > 0 ? 'error' : 'primary'}
            value={input.password}
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
            label="Password"
          />
          {error.password.length > 0 && <Typography color='red'>{error.password}</Typography>}
      </FormControl>
      <FormControl  sx={{ m: 1,  width :width > 550 ? '70%' : '100%' }}>
      <InputLabel htmlFor="outlined-adornment-Repeat-password" >Repeat password</InputLabel>
          <OutlinedInput
             error={error.confirmPassword.length > 0}
              name='confirmPassword'
              color={error.confirmPassword.length > 0 ? 'error' : 'primary'}
              id="outlined-adornment-Repeat-password"
              value={input.confirmPassword}
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
            label="Repeat password"
            
          />
          {error.confirmPassword.length > 0 && <Typography color='red'>{error.confirmPassword}</Typography>}
     </FormControl>
<FormControl  sx={{  width :width > 550 ? '70%' : '100%' , m: 1}}>   
    <TextField
    error={error.email.length > 0}
       name='email'
       color={error.email.length > 0 ? 'error' : 'primary'}
       value={input.email}
       onChange={handleOnChange}
     
      label="Email"
      defaultValue="ExampleEmail@gmail.com"
      
    />
     {error.email.length > 0 && <Typography color='red'>{error.email}</Typography>}
     </FormControl>
     </Box>   
     </ThemeProvider>
  </div>
  )
}

export default FormRegister