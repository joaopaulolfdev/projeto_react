import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/pages/Home'
import Empresa from './Components/pages/Empresa'
import Contato from './Components/pages/Contato'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/footer'

export default function App() {

  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/empresa">
            <Empresa/>
          </Route>
          <Route path='/contato'>
            <Contato/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
 )
}


