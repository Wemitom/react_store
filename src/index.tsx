import 'tailwindcss/tailwind.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App';
import { store } from 'store';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
