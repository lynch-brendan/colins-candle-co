import React, { Component } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import { fetchItems, deleteItem, addItem } from '../../actions/itemActions';
import CompleteItemRow from './CompleteItemRow';

class Inventory extends Component{

    constructor(props) {
    super(props);
    this.state = {
      remove_item: '',
      count: 0,
      total: 0,
      inCart: false,
      color: '',
      img: '',
      info: '',
      price: '',
      title: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleRemoveSubmit = this.handleRemoveSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

      //Check for items continuously
      UNSAFE_componentWillMount() {
        this.props.fetchItems();
    }
  
    onChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleRemoveSubmit(event) {
      event.preventDefault();
      this.props.deleteItem(this.state.remove_item);
      this.setState({
        ...this.state,
        remove_item: ''
      });
    }

    handleAddSubmit(event) {
      event.preventDefault();

      //Get our item object
      const item = {
        color: this.state.color,
        count: this.state.count,
        id: Math.floor(Math.random() * 1000000000),
        img: this.state.img,
        inCart: this.state.inCart,
        info: this.state.info,
        price: this.state.price,
        title: this.state.title,
        total: this.state.total
      }

      this.props.addItem(item);

      this.setState({
        remove_item: '',
        count: 0,
        total: 0,
        inCart: false,
        color: '',
        img: '',
        info: '',
        price: '',
        title: ''
      });
    }


  render() {
  return (
      <div className = "admin-container">
          <div className = "admin-nav">
            <h1 id = "admin-navigation-bar">Inventory</h1> 
            <h3 className = "warning">DO NOT USE THIS PAGE RIGHT NOW</h3>
            <div className = "admin-buttons">
                <button className = "admin-button">
                        <Link to="/active">Active Orders</Link>
                    </button>
                    <button className = "admin-button">
                        <Link to="/completed">Completed Orders</Link>
                    </button>
                    <button className = "admin-button">
                        <Link to="/inventory">Inventory</Link>
                    </button>
            </div>
            <div id = "inventory-body">
              <div id = "add-to-inventory">
                <h1>Add Item to Inventory</h1>
                  <form 
                    id = "add-item-form"
                    onSubmit = {this.handleAddSubmit}
                  >
                    <label>Color</label>
                      <input 
                      type = "text" 
                      name = "color"
                      value = {this.state.color} 
                      onChange = {this.onChange}
                      placeholder = "Color"/>
                      <label>Title</label>
                      <input 
                      type = "text" 
                      name = "title"
                      value = {this.state.title} 
                      onChange = {this.onChange}
                      placeholder = "Title"/>
                      <label>Info</label>
                      <input 
                      type = "textarea" 
                      name = "info"
                      value = {this.state.info} 
                      onChange = {this.onChange}
                      placeholder = "Info"/>
                      <label>Price</label>
                      <input 
                      type = "text" 
                      name = "price"
                      value = {this.state.price} 
                      onChange = {this.onChange}
                      placeholder = "Price"/>
                      <label>Image Name</label>
                      <input 
                      type = "text" 
                      name = "img"
                      value = {this.state.img} 
                      onChange = {this.onChange}
                      placeholder = "Image Name"/>
                    <input 
                    type = "submit"
                    value = "Add Item to Inventory"
                    />
                  </form>
              </div>

              <div id = "remove-from-inventory">
                <h1>Remove Item from Inventory</h1>
                <form onSubmit = {this.handleRemoveSubmit}>
                  <label>Remove Item by ID</label>
                  <input 
                  id = "remove-item-textbox" 
                  type = "text" 
                  name = "remove_item"
                  value = {this.state.remove_item} 
                  onChange = {this.onChange}/>
                  <input 
                  type = "submit"
                  value = "Remove Item"
                  />
                </form>
              </div>

              <div id = "current-inventory">
                <h1>Current Inventory</h1>
                <CompleteItemRow items = {this.props.items} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  items: state.items.items
})

export default connect(mapStateToProps, {fetchItems, deleteItem, addItem})(Inventory);