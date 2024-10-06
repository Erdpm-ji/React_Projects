import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FunctionMap from './compoment/FunctionMap.jsx'
import Users from './compoment/Users.jsx'
import Conditional from './compoment/Conditional1.jsx'
import Conditional1 from './compoment/Conditional1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FunctionMap/> */}
    {/* <Users/> */}
    {/* <Conditional/> */}
    <Conditional1/>
  </StrictMode>,
)
