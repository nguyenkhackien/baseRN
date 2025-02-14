import {Text, Button, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useAppDispatch} from '~/redux/hooks';
import {handleLogin} from '~/thunks/auth/authThunk';
import {handleApiError} from '~/utils/helper/helpers';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native-gesture-handler';
import {authActions} from '~/thunks/auth/authSlice';

const LoginScreen = () => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const login = async () => {
    // try {
    //   await dispatch(
    //     handleLogin({
    //       email: '',
    //       password: '',
    //     }),
    //   ).unwrap();
    // } catch (error) {
    //   handleApiError(error);
    // }
    dispatch(authActions.handleLogin());
  };
  //#endregion Handle Function

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <Button title="Login" onPress={login} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderBlockColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
  },
});
