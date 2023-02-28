import React from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../hooks/toolkitHooks';
import { filterOptions } from '../../../feactures/dog/DogSlice';
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const Alphabet = () => {
    const [activeLetter, setActiveLetter] = React.useState('');
    const options = useAppSelector(state => state.dogReducer.fetchDog)
    const dispatch = useAppDispatch()
      const handleClick = (element : string) => {
           setActiveLetter(element)
           dispatch(filterOptions({...options, page : 1 ,alphabet: element }))
      }
  return (
    <div style={{ width: '100%',   display: 'flex',flexWrap: 'wrap', justifyContent: 'center'}} >
     {alphabet.map(el => (
       <Box sx={{margin: '10px'}}   >
        
         <div key={el} onClick={() => handleClick(el)}><Typography  color='#666' 
         sx={{
            display: 'inline-block',
            
            color: '#000',
            textDecoration: 'none',
            cursor: 'pointer',
            borderBottom: '2px solid transparent',
            '&.active': {
              color: '#530D69',
              borderBottomColor: '#530D69',
            },
          }}

          className={activeLetter === el ? 'active' : ''}
         >{el}</Typography></div>
       </Box>
     ))}
    </div>
  )
}

export default Alphabet