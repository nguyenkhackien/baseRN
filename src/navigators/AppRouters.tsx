import React, { useEffect, useState } from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useAppSelector } from '~/redux/hooks';

const AppRouters = () => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  //#endregion Declare Hook

  //#region Selector
  const { accessToken } = useAppSelector((state) => state.auth);

  //#endregion Selector

  //#region Declare State

  //#endregion Declare State

  //#region Implement Hook

  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return <>{accessToken ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppRouters;
