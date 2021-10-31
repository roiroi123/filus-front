import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import Routing from "./pages/Routing";

const App = () => {
  return (
<Router>

<Routing />
</Router>
  )
};

export default App;
