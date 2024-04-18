import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import Wishlist from './pages/Wishlist';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
