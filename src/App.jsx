import Home from './pages/Home'
import Order from './pages/Order'
import Confirmation from './pages/Confirmation'
import './App.css'
import { Route , Switch } from 'react-router-dom/cjs/react-router-dom.min'
import NavController from './components/NavController'
import HomePage from './pages/HomePage'


function App() {


  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/homepage">
          <HomePage/>
        </Route>

         <Route path="/order" >
          <Order/>
        </Route>

         <Route path="/confirmation" >
          <Confirmation/>
        </Route>
      </Switch>
      <NavController/>
    </>
  )
}

export default App
