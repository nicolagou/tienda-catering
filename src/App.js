import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './Pages/CartWidget/CartWidget';
import './App.css';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='cart' element={<CartWidget />} />



        </Routes>
      </BrowserRouter>

    </CartProvider>



  );
}

export default App;
