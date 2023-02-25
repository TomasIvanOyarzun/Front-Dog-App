import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <Box sx={{height: '100%', display: 'flex' , justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
      <CircularProgress color="secondary" />
    </Box>
  )
}

export default Spinner