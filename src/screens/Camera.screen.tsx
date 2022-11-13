import {View, Text, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {CameraScreenProps} from '../utils/types';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {Button} from 'react-native-paper';
import RNFS from 'react-native-fs';
import service from '../services/service';

function CameraScreen() {
  const navigation = useNavigation<CameraScreenProps>();

  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef<Camera>(null);

  const [isLoading, setIsLoading] = React.useState(false);

  const isFocused = useIsFocused();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerView: {
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      zIndex: 1,
    },
    cameraText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 20,
    },
    footerView: {
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      backgroundColor: 'white',
      zIndex: 1,
    },
    flex1: {
      flex: 1,
    },
    loadingText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  });

  function renderHeader() {
    return (
      <View style={styles.headerView}>
        <Text style={styles.cameraText}>Scan Receipt</Text>
      </View>
    );
  }

  const takePhoto = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission !== 'authorized') {
      await Camera.requestCameraPermission();
    } else if (cameraPermission === 'authorized') {
      const photo = await camera.current?.takePhoto({
        skipMetadata: true,
        enableAutoStabilization: true,
      });
      let summary;
      setIsLoading(true);
      if (photo) {
        await RNFS.readFile(photo.path, 'base64').then(async res => {
          summary = await service.sendImage(res);
        });
        setIsLoading(false);
        navigation.navigate('SummaryScreen', {
          summary: summary,
        });
      }
    }
  };

  function renderFooter() {
    return (
      <View style={styles.footerView}>
        <Button mode="contained" onPress={takePhoto}>
          Click photo
        </Button>
      </View>
    );
  }

  function renderCamera() {
    if (!device) {
      return (
        <View style={styles.container}>
          <Text>Camera not available</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.flex1}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isFocused}
            photo={true}
            video={false}
          />
        </View>
      );
    }
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.flex1}>
      {renderHeader()}

      {renderCamera()}

      {renderFooter()}
    </View>
  );
}

export default CameraScreen;
