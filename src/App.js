import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CartWidget from './Pages/CartWidget/CartWidget';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='item' element={<ItemDetailContainer />} /> 
        <Route path='cart' element={<CartWidget />} /> 
          

       
      </Routes>
    </BrowserRouter>



  );
}

export default App;
