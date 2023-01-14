import { useState } from 'react';
import '../main.css';

import Header from './Header';
import Products from './Products';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-white">
      <Header setSearch={setSearch} />
      <Products search={search} />
    </div>
  );
}

export default App;
