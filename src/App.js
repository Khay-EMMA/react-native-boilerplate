import React, { useContext, useEffect } from 'react';
import {Text} from 'react-native'
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from './hooks/useTheme';
import AppNavigator from './navigation/AppNavigation'
import Theme from './libs/Theme';

const App = () => {


 

  return (
    <Provider>
      <ThemeProvider theme={Theme}>
        <StatusBar barStyle="dark-content" setNetworkActivityIndicatorVisible />
       <AppNavigator/>
      </ThemeProvider>
    </Provider>
  );
};

export default App;