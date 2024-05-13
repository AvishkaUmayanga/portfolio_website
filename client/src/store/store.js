import {configureStore} from '@reduxjs/toolkit'
import userAPI from './api/userApi'

const store = configureStore({
    reducer:{
        [userAPI.reducerPath] : userAPI.reducer
    },
    middleware: getMiddleWare => getMiddleWare().concat(userAPI.middleware)
})

export default store