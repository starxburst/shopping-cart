import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import { useEffect, useState } from 'react';

function App() {

  const [cartList, setCartList] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const addToCartList = (item, quantity) => {
    console.log(cartList);
    quantity = parseInt(quantity);
    let tempCartList = [...cartList]
    if (!tempCartList.some(product => product.id === item.id)) {
      item.quantity = quantity;
      setCartList([...cartList].concat(item));
    } else {
      const index = cartList.findIndex(product => {
        return product.id === item.id;
      });
      let tempItem = {...tempCartList[index]};
      tempItem.quantity = tempItem.quantity + quantity;
      tempCartList[index] = tempItem;
      setCartList(tempCartList);
    }
    updateItemQuantity();
    console.log(cartList);
  }

  const updateItemQuantity = () => {
    const quantity = cartList.reduce((acc, obj) => acc + obj.quantity, 0);
    setItemQuantity(quantity);
    console.log(itemQuantity);
  }

  const updateTotalCost = () => {
    const cost =  cartList.reduce((acc, obj) => 
      acc += obj.quantity*obj.price
    , 0)
    ;
    setTotalCost(cost);
    console.log(totalCost);
  }

  const deleteItem = (e) => {
    let id = e.currentTarget.getAttribute('id');
    id = parseInt(id);
    const tempCartList = [...cartList].filter(item => item.id !== id);
    setCartList(tempCartList);
    console.log(tempCartList);
    console.log(id);
  }

  useEffect(() => {
    updateItemQuantity();
    updateTotalCost();
  },[cartList]);

  return (
    <Router>
      <div className="App">
        <div className='header-container'>
          <Header/>
          <Nav itemQuantity={itemQuantity}/>
        </div>
        <Routes>
          <Route path ='/shopping-cart/' index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart cartList={cartList} deleteItem={deleteItem} totalCost={totalCost}/>}/>
          <Route path='/shop/:id' element={<ItemDetail addToCartList={addToCartList}/>}/>
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
