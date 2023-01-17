import React from 'react'
import { Box } from "@mui/material";
import { useFetchDogsQuery } from '../../feactures/dog/DogSlice';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/toolkitHooks';
import { increment } from '../../feactures/dog/DogSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#9CFF98',
      contrastText: '#fff',
    },
  },
});

const  MyPagination = () => {
  const options = useAppSelector(state => state.dogReducer.fetchDog)
    const {data, } = useFetchDogsQuery(options)
    const dispatch = useAppDispatch()
 
    const handleOnChange = (event: React.ChangeEvent<unknown>, pages: number) => {
        
          dispatch(increment(pages))
         
    }
  return (
    <Box my={2} display="flex" justifyContent="center">
         <ThemeProvider theme={theme}>
          <Pagination count={data?.totalPages}  color='neutral' onChange={handleOnChange} />
          </ThemeProvider>
        
      </Box>
  )
}

export default MyPagination