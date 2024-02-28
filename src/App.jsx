import React from 'react';
import { Main } from './components/main';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { AppRouter } from './components/router';

function App() {
  return (
    <Provider store={store}>
   <AppRouter></AppRouter>
   </Provider>
  );
}

export default App;