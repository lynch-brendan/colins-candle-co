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
import Success from './components/Success';
import DogModal from './components/DogModal';
import OrderModal from './components/OrderModal';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';


class App extends Component{
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
            <Route path = "/details" component = {Details} />
            <Route path = "/cart" component = {Cart} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/about" component = {About} />
            <Route path = '/success' component = {Success} />
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
