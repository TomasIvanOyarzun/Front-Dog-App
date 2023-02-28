import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { createSlice , PayloadAction} from "@reduxjs/toolkit"

export interface DogApi {
    _id? : string,
    name : string
    weight : string
    height : string
    life_span : string
    image : string
    temperament : string[]
  }
  export interface errorPostDog{
   
    
      data : string

       error : string

       originalStatus : number

         status : string

   
   
   
  }

  export interface requestBackDog {
    docs : DogApi[],
    hasNextPage : boolean,
    hasPrevPage : boolean
    limit : number,
    nextPage : number,
    page : number,
    pagingCounter: number,
    prevPage : number | null
    totalDocs : number,
    totalPages : number,

  }
  
  export interface Temperaments {
    _id : string,
    name : string
  }


  
  export const DogSlice = createApi({
    reducerPath : 'dogApi',
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001'
    }),
    tagTypes : ['Comment', 'User','Favorite', 'postDog', 'Like'],
    endpoints(builder) {
        return {
            fetchDogs : builder.query<requestBackDog , reducerDog2>({
                query(filterOptions) {
                    return `/dogs?page=${filterOptions.page}&temperament=${filterOptions.temperament}&order=
                    ${filterOptions.order}&height=${filterOptions.height}&weight=${filterOptions.weight}&search=${filterOptions.search}&alphabet=${filterOptions.alphabet}`
                },
                providesTags : ['postDog']
            }),
             fetchDogs2 : builder.query<DogApi[] , void>({
                query() {
                    return `/dogs/sliders`
                    
                },
                providesTags : ['postDog']
            }),
            fetchDogById : builder.query<DogApi, string | undefined>({
                query(id){
                    return `/dog/${id}`
                }
            }),

            fetchTemperaments : builder.query<Temperaments[], string>({
              query(){
                return `/temperaments`
              }
            }),
            fetchDogsTemperament : builder.query<requestBackDog , string>({
              query(temperament) {
                  return `/dogs?temperament=${temperament}`
              }
          }),
          
          fetchDogsPost : builder.mutation<DogApi, DogApi>({
            query : (data) => ({
              url : `/create/dog`,
              method : 'POST',
              body : data
          }),
          invalidatesTags : ['postDog']
         
          })
        
        }
    }
  })
 
  
   interface reducerDog  {
   
      page : number,
      temperament : string
      height : string
      weight : string
      order : number
      
   }
   interface reducerDog2  {
   
    page : number,
    temperament : string
    alphabet : string
    height : string
    weight : string
    order : number
    search : string
 }



  const initialState = {
    fetchDog : {
      page : 1 ,
      temperament : '',
      alphabet : '',
      height : '',
      weight : '',
      order : 0 ,
      search : ''
    }


  }
  const DogSlice3 = createSlice({
    name : 'dogPage',
    initialState,
    reducers : {
        increment : (state,  action : PayloadAction<number>) =>{
             state.fetchDog.page =  action.payload
        },

        temperamentSelect : (state, action : PayloadAction<string>) => {
           state.fetchDog.temperament = action.payload
        },
         
        filterOptions : ( state, action : PayloadAction<reducerDog2>) => {
             state.fetchDog = action.payload 
        },

        resetFilter : (state) => {
          state.fetchDog = initialState.fetchDog
        }

       
    }
})
  
export const { increment, temperamentSelect, filterOptions, resetFilter} = DogSlice3.actions
export default DogSlice3.reducer
  export const {useFetchDogsQuery, useFetchDogByIdQuery, useFetchTemperamentsQuery, useFetchDogsTemperamentQuery, useFetchDogsPostMutation, useFetchDogs2Query} = DogSlice