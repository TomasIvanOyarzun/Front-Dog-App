import React from 'react'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { green } from '@mui/material/colors'
import { getUserData, useFetchFavoriteUserQuery } from '../../../feactures/user/UserSlice';
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const FavIcon = () => {
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const {data, isSuccess} = useFetchFavoriteUserQuery(user?._id)
  return (
    <IconButton aria-label="favorite">
    <StyledBadge badgeContent={data?.length} color="error">
      <FavoriteIcon sx={{color : green[500]}} fontSize='large' />
    </StyledBadge>
  </IconButton>
  )
}

export default FavIcon