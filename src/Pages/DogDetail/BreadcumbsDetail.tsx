import React from 'react'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadcumbsDetail = () => {
  return (
    <div role="presentation" onClick={handleClick}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link to='/' style={{textDecoration: 'none'}}>
      <StyledBreadcrumb
        component="a"
       
        label="Inicio"
        icon={<KeyboardArrowRightIcon fontSize="small" />}
      />
      </Link>

      <Link to='/home'  style={{textDecoration: 'none'}}>  <StyledBreadcrumb component="a" href="#" label="Home" icon={<HomeIcon fontSize="small" />}/></Link>
     
      <StyledBreadcrumb
        label="Dog"
        icon={<PetsIcon fontSize="small" />}
        
      />
    </Breadcrumbs>
  </div>
  )
}

export default BreadcumbsDetail