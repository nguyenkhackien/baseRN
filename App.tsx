import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppRouters from '~/navigators/AppRouters';
import {Provider} from 'react-redux';
import store from '~/redux/store';
import './src/shared/locales/i18n';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <AppRouters />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
