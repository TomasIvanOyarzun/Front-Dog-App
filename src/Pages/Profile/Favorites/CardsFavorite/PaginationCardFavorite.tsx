import React from 'react'
import Pagination from '@mui/material/Pagination';
import { getUserData, useFetchFavoriteUserQuery } from '../../../../feactures/user/UserSlice';

interface Props {
    setCurrentPage : React.Dispatch<React.SetStateAction<number>>
    postPerPage : number
}
const PaginationCardFavorite = ({setCurrentPage, postPerPage} : Props) => {
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const favorite = useFetchFavoriteUserQuery(user?._id)
    const total = favorite.data?.length
  
  return (

      <>
    {typeof total === 'number' && <Pagination onChange={(event: React.ChangeEvent<unknown>, pages: number) => setCurrentPage(pages)} count={Math.ceil(total / postPerPage) } shape="rounded" />}

    </>
  )
}

export default PaginationCardFavorite