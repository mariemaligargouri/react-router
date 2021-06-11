import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";

function App() {
  const products = [
    {
      id: 0,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      id: 1,
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      id: 2,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/products"
            render={() => <Products products={products} />}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/products/:id"
            render={(props) => <ProductDetail {...props} products={products} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
