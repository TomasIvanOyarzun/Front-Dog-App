import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system'
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import { getUserData } from '../../../feactures/user/UserSlice';
import  Typography  from '@mui/material/Typography';
import logoBlack from '../../../images/FetchDogBlack.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      main: '#64BE43',
      darker: '#053e85',
    },
    neutral: {
      main: '#9CFF98',
      contrastText: '#fff',
    },
  },
});

const Panel = () => {
  const user : getUserData = JSON.parse(localStorage.getItem('user') as string)

  const [dateState, setDateState] = React.useState(new Date());
  React.useEffect(() => {
         setInterval(() => setDateState(new Date()), 300);

        
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Box
    sx={{ width: 280 , height: '100%',backgroundColor: '#FFF' , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}
    
  >
 
         <Box width='100%' display='flex'  flexDirection='column' justifyContent='center' alignItems='center' margin='5px'>
        
             <img width='220px'  src={logoBlack} alt='logo-app'/>
   
         </Box>
       <Divider ></Divider>
    <List>
      {[ {route : 'Dashboard', link : '/profile/main'}, {route :'Favorites' , link : '/profile/favorites'}, {route :'Send email', link : '/'}].map((text, index) => (
         <Link style={{textDecoration: 'none'}} to={`${text.link}`}>
        <ListItem key={text.route} disablePadding>
         
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <DashboardIcon  color='primary'  fontSize='large'/> }
              {index === 1 && <FavoriteBorderIcon  color='primary' fontSize='large'/>}
              {index === 2 && <MailIcon  color='primary'  fontSize='large'/>}
            </ListItemIcon>
            <ListItemText  sx={{color : '#464646', fontSize: '8px'}} primary={text.route} />
          </ListItemButton>
          
        </ListItem>
        </Link>
      ))}
    </List>
    <Divider />
    <List>
      {[{ route: 'Inicio' , link : '/'}, {route : 'Home', link : '/home'}].map((text, index) => (
        <Link style={{textDecoration: 'none'}} to={`${text.link}`}>
        <ListItem key={text.route} disablePadding>
          
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <HouseSidingIcon  color='primary' fontSize='large'/>}
              {index === 1 && <HomeSharpIcon  color='primary' fontSize='large'/>}
             
            </ListItemIcon>
            <ListItemText  sx={{color : '#464646'}} color={theme.palette.primary.main} primary={text.route}/>
          </ListItemButton>
          
        </ListItem>
        </Link>
      ))}
    </List>
   
    <List sx={{marginTop: '80px'}}>
       
    <Box display='flex' justifyContent='center' width='100%'>
                  <Typography variant='h5' fontWeight='1000'>{dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second : 'numeric',
                hour12: true,
            })}</Typography>
              <WatchLaterSharpIcon sx={{fontSize:  '40px'}}/>
                  </Box>

              <Box display='flex' justifyContent='center' width='100%'>
              <Typography variant={'h5'}  fontWeight='800'>{dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</Typography>
               <CalendarMonthSharpIcon sx={{fontSize: '40px'}}/>
              </Box>

        <ListItem key='Logout' disablePadding>
          <ListItemButton>
            <ListItemIcon>
           <MeetingRoomSharpIcon  color='success' fontSize='large'/>
            </ListItemIcon>
            <ListItemText sx={{color : '#464646'}} primary='Logout' />
          </ListItemButton>
        </ListItem>
   
    </List>
  </Box >
  </ThemeProvider>
  )
}

export default Panel