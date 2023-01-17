import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import Chip from '@mui/material/Chip';
import { emphasize} from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Login from './LoginForm/Login';
import NavMenuUser from './navUserMenu/NavMenuUser';
import { useAppDispatch, useAppSelector } from '../../hooks/toolkitHooks';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/fetchDog.png'
import { Container } from '@mui/system';
import { getUserData, useFetchFavoriteUserQuery, userActive } from '../../feactures/user/UserSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { usePositionY, useWidthScreen } from '../../hooks/customHooks';
import FavIcon from './favoriteIcon/FavIcon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import SearchCustom from './Search/SearchCustom';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip
const drawerWidth = 240;



  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const Navbar = (props: Props) => {
 
  const activeUser = useAppSelector(state => state.user.active)
  const [openOut, setOpenOut] = React.useState(false);
  const dispatch = useAppDispatch()
   const {width} = useWidthScreen()
   const [y , setY ] = usePositionY()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const locations = useLocation()
  
     
     const { window  } = props;
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    
 
    const handleOnClicks = () => {
      localStorage.removeItem('user')
      dispatch(userActive(false))
     
        document.location.reload()
  }
    const absolute =  locations.pathname === '/' ? 'absolute' : ''
    const bgColor =  locations.pathname === '/' && y < 800 ? 'transparent' : '#111'

   
    const shadow =   locations.pathname === '/' ? '0' : '1'

    const navItems = [{ link : '/', component : <Button  sx={{ color: '#fff' }}  ><HomeIcon fontSize='large' />{`Inicio`}</Button>},{ link : '/profile/main', component : <Button sx={{ color: '#fff' }} ><AccountBoxIcon  fontSize='large' />{`My account`}</Button>}, {link : '/home', component :<Button sx={{ color: '#fff' }} >< PetsIcon fontSize='large'/>{`Dogs`}</Button> },  {name: 'Contact' , component: <Button sx={{ color: '#fff' }} >< PermContactCalendarIcon fontSize='large'/>{`Contact`}</Button>}, {link : '/profile/favorites',component : <Button sx={{ color: '#fff' }} ><FavoriteBorderIcon fontSize='large'/>{`Favorites`}</Button>},{ component : <Button sx={{ color: '#fff' }}  onClick={handleOnClicks}><LoginIcon fontSize='large'  />{`Logout`}</Button> }];
    const navItemsLogin = [{ link : '/', component : <Button sx={{ color: '#fff' }}  ><HomeIcon fontSize='large' />{`Inicio`}</Button>},{ component :    <Button  sx={{ color: '#fff' }} onClick={() => setOpenOut(!openOut)}> <LoginIcon fontSize='large'/>{`Login`}</Button> }, {name: 'Contact' , component: <Button sx={{ color: '#fff' }} >< PermContactCalendarIcon fontSize='large'/>{`Contact`}</Button>}, { link : '/home', component :<Button sx={{ color: '#fff' }}  >< PetsIcon fontSize='large'/>{`Dogs`}</Button>}] 
    const navItemsTrue = activeUser  || localStorage.getItem('user') ?  navItems :  navItemsLogin 
    const displayNone = locations.pathname !== '/profile'  ?  'flex' : 'none'
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor:'#262626' }}>
           <img src={logo} width='150px'/>
          <Divider />
          <List>
            {navItemsTrue.map((item, index) => (
             <Link style={{textDecoration: 'none'}} to={item.link ? item.link : locations.pathname}>
             <ListItem key={index} disablePadding sx={{ display: 'flex', justifyContent: 'center' }} >
             
             <Box width='100%'>{item.component}</Box>
            
           </ListItem>
             </Link>
            ))}
          </List>
        </Box>
      );
    

   
  return (
    <>
     {openOut && <Login openOut={openOut} setOpenOut={setOpenOut}/>}
   
    <Box  sx={{ display: width > 600 ? displayNone : 'flex', position : absolute}}>
    <CssBaseline />
    <AppBar component="nav" sx={{ color: '#555555', backgroundColor: bgColor , boxShadow : shadow, transition : '0.6s ease'}} >
      <Container>
      <Toolbar  sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
       {width > 600 && <img src={logo} width='150px'/>}
       
        

       <SearchCustom/>
        <Box sx={{ display: { xs: 'none', sm: 'block' } , width: '15%'}}>
        
         <Box sx={{  width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
          
           {localStorage.getItem('user') && <FavIcon/>}
        
         
            {(localStorage.getItem('user') === null )|| (localStorage.getItem('user') === undefined) ?  (<Button  sx={{ color: '#fff' }} onClick={() => setOpenOut(!openOut)}> <LoginIcon/>{`Login`}</Button>)  :  (<NavMenuUser/>)
            }
         </Box>
        
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
    <Box component="nav">
      <Drawer
       
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      
    </Box>
    <Toolbar />
    </Box>
    </>
  )
}

export default Navbar

