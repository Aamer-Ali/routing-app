import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
