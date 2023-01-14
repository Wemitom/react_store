import { useState } from 'react';
import '../main.css';

import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Products from './Products';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-white">
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="" element={<Products search={search} />} />
      </Routes>
    </div>
  );
}

export default App;
