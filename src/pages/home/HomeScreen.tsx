import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/redux/hooks';
import { authActions } from '~/thunks/auth/authSlice';
import Config from 'react-native-config';

const HomeScreen = () => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const logout = async () => {
    dispatch(authActions.handleLogout());
  };
  //#endregion Handle Function

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}> {t('home')} </Text>
      <Button title='Logout' onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
});
