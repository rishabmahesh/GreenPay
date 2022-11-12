import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RewardsScreenProps} from '../utils/types';
import {Camera} from 'react-native-vision-camera';

function RewardsScreen() {
  const navigation = useNavigation<RewardsScreenProps>();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const openCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission !== 'authorized') {
      await Camera.requestCameraPermission();
    } else if (cameraPermission === 'authorized') {
      navigation.navigate('CameraScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Rewards Screen</Text>
      <Button title="Open Camera" onPress={openCamera} color="#841584" />
    </View>
  );
}

export default RewardsScreen;
