import React from 'react'
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { useWidthScreen } from '../../../hooks/customHooks';


const Info = () => {
  const {width} = useWidthScreen()
  return (
    <Box sx={{m: 1, width : width > 500 ? '70%' : '100%'}} >
      <Alert variant="filled" severity="info">
   On our page, we value and protect your privacy. By registering, you agree that your data will only be used for internal purposes and will never be shared with third parties without your prior consent.
  </Alert>
    </Box>
  )
}

export default Info