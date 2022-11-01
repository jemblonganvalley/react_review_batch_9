import './App.css'
import { Routes, Route } from "react-router-dom"
import ReactComponent from './pages/ReactComponent'
import ReactProps from './pages/ReactProps'
import ReactState from './pages/ReactState'
import CondRendering from './pages/CondRendering'
import CompLifeCycle from './pages/CompLifeCycle'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ReactComponent />} />
      <Route path='/props' element={<ReactProps />} />
      <Route path='/state' element={<ReactState />} />
      <Route path='/cond-rendering' element={<CondRendering />} />
      <Route path='/lifecycle' element={<CompLifeCycle />} />
      <Route path='/route' element={<h1>React Router DOM</h1>} />
      <Route path='/params' element={<h1>React Router DOM Params</h1>} />
      <Route path='/outlet' element={<h1>React Router DOM Outlet</h1>} />
      <Route path='/protected-routes' element={<h1>Protected Routes</h1>} />
    </Routes>
  )
}

export default App
