import React from 'react';
import { Main } from './components/main';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
   <Main></Main>
   </Provider>
  );
}

export default App;