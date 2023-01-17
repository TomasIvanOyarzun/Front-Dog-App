import React from 'react'

import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

import { useWidthScreen } from '../../../hooks/customHooks';

import black_dog from '../../../images/black-dog.webp'

const Developer = () => {

    const {width } = useWidthScreen()
  return (
    <Box width='100%' height='500px'   sx={{backgroundImage: `url(${black_dog})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}} >
    <Box display='flex' justifyContent='center' alignItems='center' width='100%' height='500px' sx={{backgroundColor: 'rgb(17, 17, 17, 0.7)'}}>
              <Box width={width > 1450 ? '40%' : '80%'} height='50%' display='flex'  justifyContent='space-evenly' alignItems='center' flexDirection='column'>
                 <Typography color='#64BE43' variant='h4' fontWeight='800'>Page Developer</Typography>
                 <Typography color='#fff'>The sole purpose of the page is to learn and put into
                    practice the technologies learned, if you need my service as a 
                    developer, you can contact me</Typography>
                    <Button sx={{backgroundColor: '#64BE43', color: '#fff', borderRadius: '2px' , width : width > 710 ? '20%' : '40%' , height: '45px'}}>Contact me</Button>
              </Box>
    </Box>
 </Box>
  )
}

export default Developer