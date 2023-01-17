import { configureStore } from "@reduxjs/toolkit";
import { DogSlice } from "../feactures/dog/DogSlice";
import DogSlice3 from "../feactures/dog/DogSlice"
import UserSlice from "../feactures/user/UserSlice";
 const store = configureStore({
    reducer : {
      dogReducer :  DogSlice3,
      user : UserSlice,
       [DogSlice.reducerPath] : DogSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(DogSlice.middleware),
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof  store.getState>
export default store