import React from 'react';

import { Provider } from 'react-redux';
import RouteCompent from './Screens/RouteCompent';
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouteCompent />
    </Provider>
  )
}

export default App;