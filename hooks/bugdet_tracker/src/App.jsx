import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import AddBugdet from './component/AddBugdet';
import ListOfBugdet from './component/ListOfBugdet';
import WelcomeMsg from './component/WelcomeMsg';
import ItemListContextProvider from './store/ItemListContextProvider';


function App() {

  return (
    <>
      <ItemListContextProvider>
        <div className='container'>
          <AppName />
          <AddBugdet/>
          <WelcomeMsg/>
          <ListOfBugdet/>
        </div>
      </ItemListContextProvider>
    </>
  )
}

export default App
