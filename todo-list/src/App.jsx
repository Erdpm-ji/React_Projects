import react from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoHeadline from './component/TodoHeadline'
import TodoList from './component/TodoList'


function App() {

  return (
    <>
    <center> <TodoHeadline/> </center>  
     <TodoList/>
    </>
  )
}

export default App
