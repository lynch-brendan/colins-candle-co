import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import MainHeader from './components/MainHeader';import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import DogModal from './components/DogModal';
import OrderModal from './components/OrderModal';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './components/Admin';
import ActiveOrders from './components/admin/ActiveOrders';
import CompletedOrders from './components/admin/CompletedOrders';
import Inventory from './components/admin/Inventory';


class App extends Component{

  //Check for user identification constantly
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
  return (
    <Provider store = {store}>
      <div className="App">
        <React.Fragment>
          <MainHeader />
          <Switch>
            <Route exact path = "/" component = {ProductList} />
            <Route exact path = "/details" component = {Details} />
            <Route exact path = "/cart" component = {Cart} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/about" component = {About} />
            <ProtectedRoute exact path = '/admin' component = {Admin} />
            <ProtectedRoute exact path = '/active' component = {ActiveOrders} />
            <ProtectedRoute exact path = '/completed' component = {CompletedOrders} />
            <ProtectedRoute exact path = '/inventory' component = {Inventory} />
            <Route component = {Default} />
          </Switch>
          <Modal />
          <OrderModal />
          <DogModal />
          <Footer />
        </React.Fragment>
      </div>
    </Provider>
    );
  }
}

export default App;
