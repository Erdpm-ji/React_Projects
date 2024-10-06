import './App.css'
import AppName from './component/AppName'
import AddTodo from './component/AddTodo'
import WelCome from './component/WelCome'
import TodoList from './component/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoItemContextProvider from './store/TodoItemContextProvider'

function App() {

  return (
    <>
      <TodoItemContextProvider>
        <div className='container'>
          <AppName />
          <AddTodo/>
          <WelCome/>
          <TodoList/>
        </div>
        </TodoItemContextProvider>
    </>
  )
}

export default App;
