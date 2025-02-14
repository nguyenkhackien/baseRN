import React, {useEffect, useState} from 'react';
import {SplashScreen} from '~/pages';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import {useAppSelector} from '~/redux/hooks';

const AppRouters = () => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  //#endregion Declare Hook

  //#region Selector
  const {accessToken} = useAppSelector(state => state.auth);

  //#endregion Selector

  //#region Declare State
  const [isShowSplash, setIsShowSplash] = useState(true);

  //#endregion Declare State

  //#region Implement Hook
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : accessToken ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default AppRouters;
