import React from 'react';

import { Provider } from 'react-redux';
import RoutingComponent from './Screens/RoutingComponent';
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RoutingComponent />
    </Provider>
  )
}

export default App;