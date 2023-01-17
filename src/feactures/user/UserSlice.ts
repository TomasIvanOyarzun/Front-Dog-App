import { DogApi, DogSlice } from "../dog/DogSlice";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface getUserData {
   
        _id: string
        userName: string
        email: string
        image? : string
        favorite? : string[]
        role: string
        email_confirmed : boolean
      
}



interface Register {
    name : string,
    email : string,
    password : string
}
type login = Omit<Register, "name">

type errorAndResponse = {
    error: boolean
    msg : string
}

type responseLogin = {
  
        token: string,
        error: boolean,
        msg: string
     
}

export interface commentResponse {
    _id?: string
    dog: string,
    comment: string,
    user: string,
    like : number,
    exits : boolean,
    __v?: number




   
}

export interface allUser {
    _id: string
    name: string,
    email: string,
    password: string,
    image? : string
    email_confirmed: boolean,
    role: string,
    token: string | null,
    comments: Array<string>
    __v: number
}

export interface userForCommentMath extends allUser {
    favorite : string[]
}
export interface commentPost {
    user : string,
    comment : string, 
    dog : string
}

export interface updatingComment {
    _id: string | undefined;
    dog: string;
    user : string
    comment: string;
    like: number;
    exits: boolean;
}

export interface CommentResponse {
    _id: string | undefined;
    dog: string;
    user : userForCommentMath
    comment: string;
    like: number;

    exits: boolean;
}

interface registerUser {
    error : boolean,
    msg : string
}


interface userPost {
    name : string ,
    password : string,
    confirmPassword : string    
    email : string,
    temperaments? : string[],
    size? : string[]

}

export interface userCommentId {
    _id: string,
    dog: DogApi,
    comment: string,
    user: string,
    like: number,
    exits: boolean,
    __v: number
}
export interface responsePostLike {
    _id? : string,
    
    comment : string
    likeUser : string,
}
const UserQuery = DogSlice.injectEndpoints({
    

    endpoints : (builder) => ({
        fetchRegisterUser : builder.mutation<errorAndResponse , Register > ( {
            query : (data) => ({
             url : '/user',
             method : 'POST',
             body : data

            }),

            
        }

        ),

       
        fetchAuthenticateUser : builder.mutation<responseLogin, login >({

            
            query : (data) => ({
            url : '/authenticate',
            method : 'POST',
            body : data
            }),
           
        }),

        fetchDataUser : builder.query<getUserData , string | undefined >({

            
            query (token) {
               return {
                 url : '/user',
                 headers : {Bearer: token}
               }
            } ,
            providesTags : ['User']
        }),

        fetchComments : builder.query<CommentResponse[] , string | undefined>({
            query : (id) => `/comments/${id}` ,
            providesTags: ['Comment'],
            
        }),

        fetchAllUser : builder.query<allUser[] , string | undefined>({
            query : () => `/all/users`
        }),

        fetchPostComment : builder.mutation<commentResponse, commentPost >({
            query : (data) => ({
                url : '/comment',
                method : 'POST',
                body : data
                }),
                invalidatesTags : ['Comment']
        }),

        fetchUpdateComment : builder.mutation< updatingComment, updatingComment > ({
            query : (data) => ({
                
                url : `/comment/${data._id}`,
                method : 'PUT',
                body : data
                }),
                invalidatesTags : ['Comment']
        }),

        fetchRegister : builder.mutation<registerUser, userPost>({
           query : (data) => ({
            url : `/user`,
            method : 'POST',
            body : data
           })
        }),

        fetchUpdateUser : builder.mutation<getUserData , getUserData>({
            query : (data) => ({
                url : `/user/update/${data._id}`,
                method : 'PUT',
                body : data
            }),
            invalidatesTags : ['User', 'Favorite']
        }),

        fetchFavoriteUser : builder.query<string[], string>({
            query : (id) => `/favorite/${id}` ,
            providesTags : ['Favorite']
        }),
          

        fetchFavoriteUserFullProperty : builder.query<DogApi[], string>({
            query : (id) => `/favorite/user/${id}` ,
            providesTags : ['Favorite']
        }),
        fetchCommentId : builder.query<userCommentId[]  , string>({
            query : (id) => `/comment/user/${id}`
        }),

        fetchPostLike : builder.mutation<responsePostLike, responsePostLike>({
            query : (data) => ({
                url : `/post/like`,
                method : 'POST',
                body : data
            }),
            invalidatesTags : ['Like']
        }),
        fetchGetLike : builder.query<responsePostLike[], null>({
            query : () =>  `/like`,
            providesTags : ['Like']
        }),

        fetchRemoveLike : builder.mutation<responsePostLike , string>({
            query : (id) => ({
                url : `/like/delete/${id}`,
                method : 'DELETE',
               
            }),
            invalidatesTags : ['Like']
        })
        
         
        
    })
})

const initialState = {
    active : false,
    imageUrl : ''
   
}


const UserSlice = createSlice({
    name : 'user',
    initialState ,
    
    reducers : {
    
        userActive : (state, action : PayloadAction<boolean>) => {
           state.active = action.payload
        } ,

        imageUrl : (state, action : PayloadAction<string>) => {
            state.imageUrl = action.payload
        }
        
   
       
    }
})
export const {useFetchRegisterUserMutation,
     useFetchAuthenticateUserMutation,
      useFetchDataUserQuery, 
      useFetchCommentsQuery, 
      useFetchAllUserQuery,
       useFetchPostCommentMutation,
    useFetchUpdateCommentMutation,
    useFetchRegisterMutation,
    useFetchUpdateUserMutation,
    useFetchFavoriteUserQuery,
    useFetchFavoriteUserFullPropertyQuery,
    useFetchCommentIdQuery,
    useFetchPostLikeMutation,
    useFetchGetLikeQuery,
    useFetchRemoveLikeMutation

} = UserQuery


export default UserSlice.reducer
export const {userActive, imageUrl} = UserSlice.actions