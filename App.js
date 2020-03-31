import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreem';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
};
