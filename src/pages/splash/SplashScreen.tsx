import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {appInfo} from '~/utils/constants/appInfo';
import BaseScreen from '~/components/base-screen/BaseScreen';
import {appColors} from '~/utils/constants/appColors';

const SplashScreen = () => {
  return (
    <BaseScreen containerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
        />
        <ActivityIndicator color={appColors.primary} size={22} />
      </View>
    </BaseScreen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: appInfo.sizes.WIDTH * 0.4,
    resizeMode: 'contain',
  },
});
