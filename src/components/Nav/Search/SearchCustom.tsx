import React from 'react'
import {alpha } from '@mui/material/styles';
import  styled from '@mui/material/styles/styled';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { useAppDispatch, useAppSelector } from '../../../hooks/toolkitHooks';
import { filterOptions } from '../../../feactures/dog/DogSlice';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color : '#fff',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

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
const SearchCustom = () => {
    const location = useLocation()
   const dispatch = useAppDispatch()
    const [input, setInputChange] = React.useState("");
    const options = useAppSelector(state => state.dogReducer.fetchDog)
    function handleChangeInput(e :  React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setInputChange(e.target.value);
        
      }
     
      const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
               e.preventDefault()
        dispatch(filterOptions({...options, search : input}))
      }
      
  return (
       <>
    { location.pathname === '/home' && 
    <form onSubmit={handleSubmit}>
    <Search sx={{color: '#666'}}  onChange={handleChangeInput}>
    <SearchIconWrapper>
      <SearchIcon   />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
    </Search >
    
    </form>
  }
   </> 
  )
}

export default SearchCustom