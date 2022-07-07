import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from './pages/Cart'
import { BrowserRouter as Router, NavLink,Switch,Redirect,Route } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
 const user = useSelector(state => state.user.currentUser)
  return (
<Router>
<Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/Products/:category'><ProductList /></Route>
                <Route exact path='/Product/:idq'><Product /></Route>
                <Route exact path='/cart'><Cart /></Route>
                <Route exact path='/success'><Success /></Route>
                <Route exact path='/login'>
                  {user ? <Redirect to='/' /> : <Login />}
                </Route>
                <Route exact path='/register'>
                {user ? <Redirect to='/' /> : <Register />}
                  </Route>
                <Redirect from='/' to='/' />

            </Switch>
</Router>
  )
};

export default App;
