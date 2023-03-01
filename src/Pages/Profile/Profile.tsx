import React from 'react'
import { Box } from '@mui/system'
import Panel from './Panel/Panel'
import { Outlet } from 'react-router-dom'

import { useWidthScreen } from '../../hooks/customHooks'

const Profile = () => {
   
  const {width} = useWidthScreen()


  React.useEffect(()=> {
    window.scrollTo(0,0)
 },[])

  return (
    <Box sx={{display: 'flex' , flexDirection:'column', width: '100%' , height:  '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'}}>



             
        <Box  sx={{display: 'flex' , alignItems: 'center', width: '100%' , height: '100%' }} >
       
           {width > 900 && <Panel/>}
         
     <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width : '100%' , height :'100%'}}>
        
     <Outlet/>
     </Box>
     </Box>
    </Box>
  )
}

export default Profile