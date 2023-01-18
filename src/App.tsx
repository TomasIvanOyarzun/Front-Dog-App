import Home from './Pages/Home/Home'
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav/Navbar'
import DogDetail from './Pages/DogDetail/DogDetail'
import Box from '@mui/material/Box';
import Inicio from './Pages/Inicio/Inicio';
import AlertText from './components/AlertText/AlertText'
import { useAppSelector } from './hooks/toolkitHooks'
import Footer from './components/Footer/Footer'
import Register from './Pages/register/Register'
import Profile from './Pages/Profile/Profile'
import Main from './Pages/Profile/Main/Main'
import { ProtectedRoute } from './Utils/ProtectedRoutes'
import { getUserData } from './feactures/user/UserSlice'
import ListFavoriteUser from './Pages/Profile/Favorites/ListFavoriteUser'

function App() {
  const active = useAppSelector(state => state.user.active)
  const user : getUserData = JSON.parse(localStorage.getItem('user') as string)

  console.log('cambiao', process.env.REACT_APP_BACKEND_URL)
  return (
    <div style={{width: '100%'}}>
      <Nav/>
     
      <Box  >
     
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/dog/:id' element={<DogDetail/>} />
          <Route path='/' element={<Inicio/>} />
          <Route path='/register' element={<Register/>} />
           
          <Route    element={<ProtectedRoute isAllowed={user !== null} redirectTo={"/"}/>}>
             
             <Route path="profile" element={<Profile />} >
             <Route path="main" element={<Main />} />
             <Route path="favorites" element={<ListFavoriteUser />} />
             </Route>
             </Route>
         
          

        </Routes>
        
      </Box>
     
      <Footer/>
    </div>
  );
}

export default App;
