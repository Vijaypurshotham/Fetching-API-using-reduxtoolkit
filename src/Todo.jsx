import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTodo} from './redux/Slicer'


const Todo = () => {
    const dispatch = useDispatch()

    // ? Retrieving the data using useSelector
    const data  = useSelector(state => state.todo)
      useEffect(() => {
      dispatch(fetchTodo())
      }, [])


    console.log(data);
  return (
    <div>
      {
        data.isLoading ? <h1>Loading....</h1> : 
        data.data.map(todo => {
            return <p>{todo.name}</p>
        })
      }
    </div>
  )
}

export default Todo
