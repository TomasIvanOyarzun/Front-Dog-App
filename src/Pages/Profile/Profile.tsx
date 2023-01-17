
import { Box } from '@mui/system'
import Panel from './Panel/Panel'
import { Outlet } from 'react-router-dom'

import { useWidthScreen } from '../../hooks/customHooks'

const Profile = () => {
   
  const {width} = useWidthScreen()


  
  return (
    <Box sx={{display: 'flex' , flexDirection:'column', width: '100%' , height: width > 1250 ? '100vh' : '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F5F4'}}>



             
        <Box  sx={{display: 'flex' , alignItems: 'center', width: '100%' , height: '100%' }} >
       
           {width > 900 && <Panel/>}
         
     <Box sx={{display: 'flex', justifyContent: width > 699 ? 'space-between' : 'center', alignItems: 'center', width : '100%' , height :'90%'}}>
        
     <Outlet/>
     </Box>
     </Box>
    </Box>
  )
}

export default Profile