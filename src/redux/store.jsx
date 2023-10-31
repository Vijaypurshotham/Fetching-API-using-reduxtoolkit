import {configureStore} from '@reduxjs/toolkit'
import SlicerReducer from './Slicer'

 export const store = configureStore({
    reducer : { 
    todo : SlicerReducer
    }
})

