import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import { usePositionY, useWidthScreen } from '../../hooks/customHooks';
import FormDog from '../../components/FormDog/FormDog';
const IconDog = () => {
    const [open , setOpen] = React.useState(false)
    const [y] = usePositionY()
    const {width} = useWidthScreen()
  

    const displayNone = y > 3180 ? 'none' : 'flex'
    const display = y < 490 ? 'flex' : 'none'

    const handleOnClick = () => {
        setOpen(!open)
    }
  return (
    <>
    {<FormDog open={open} setOpen={setOpen}/>}
    <Fab onClick={handleOnClick} sx={{ display: width < 900 ? displayNone : display,  position : 'fixed' , bottom : '10%', right: '2%' , bgcolor: '#64BE43'}} color="primary" aria-label="add">
        <AddIcon  />
      </Fab>
      </>
  )
}

export default IconDog