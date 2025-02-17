import React from 'react'
import { emphasize} from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
   
  }
  
const BreadcumbsInicio = () => {
  return (
    <div role="presentation" onClick={handleClick} style={{margin: '8px'}}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          label="Inicio"
          icon={<KeyboardArrowRightIcon fontSize="small" />}
        />
      
        
      </Breadcrumbs>
    </div>
  )
}

export default BreadcumbsInicio