import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './stateSlice'
export default configureStore(
    {
        reducer:{
            search:searchReducer
        }
    }
)