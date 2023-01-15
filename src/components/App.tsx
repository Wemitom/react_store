import { useState } from 'react';
import '../main.css';

import { Route, Routes } from 'react-router-dom';

import Cart from './Cart';
import Header from './Header';
import Products from './Products';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch} />
      <main className="mt-6 flex justify-center bg-white">
        <Routes>
          <Route path="" element={<Products search={search} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
