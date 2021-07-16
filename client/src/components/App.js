import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import {getUser} from '../actions/'
// import Loader from './Loader';
import Error404 from "./views/Error404";
import AdminRoutes from "./routes/AdminRoutes";
// import FullScreenModal from './FullScreenModal';
import Layout from "./Layout";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Contact from "./views/Contact";
import ProductPage from "./views/ProductPage";
import Favourites from "./views/Favourites";
import Category from "./views/Category";
import SearchResult from "./views/SearchResults";
import CartView from "./views/CartView";
import Order from "./views/Order";

function App({getUser}) {
  useEffect(()=>{
    getUser()
  }, [getUser])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Layout><Home/></Layout>
          </Route>

          <Route path="/signup">
            <Layout><Signup/></Layout>
          </Route>

          <Route path="/login">
            <Layout><Login/></Layout>
          </Route>

          <Route path="/about" >
          <Layout><About/></Layout>
          </Route>

          <Route path="/contact">
            <Layout><Contact/></Layout>
          </Route>

          <Route path="/product/:id">
            <Layout><ProductPage/></Layout>
          </Route>

          <Route path="/category/:categoryName" >
            <Layout><Category/></Layout>
          </Route>

          <Route path="/search/:query" >
            <Layout><SearchResult/></Layout>
          </Route>

          <Route path="/favourites" >
            <Layout><Favourites/></Layout>
          </Route>

          <Route path="/cart" >
            <Layout><CartView/></Layout>
          </Route>

          <Route path="/create-order" >
            <Layout><Order/></Layout>
          </Route>

          {/* <Route path='/test' component={FullScreenModal}/> */}

          <AdminRoutes/>

          <Route >
            <Layout><Error404/></Layout>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, {getUser})(App);
