import {View, Text, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ExploreScreenProps} from '../utils/types';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {Button} from 'react-native-paper';
import RNFS from 'react-native-fs';
import service from '../services/service';

function CameraScreen() {
  const navigation = useNavigation<ExploreScreenProps>();

  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef<Camera>(null);

  const [base64, setBase64] = React.useState<string>('');

  const isFocused = useIsFocused();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          backgroundColor: 'white',
          zIndex: 1,
        }}>
        <Text style={{flex: 1, marginLeft: 20}}>Scan Camera</Text>
      </View>
    );
  }

  const takePhoto = async () => {
    const photo = await camera.current?.takePhoto({
      skipMetadata: true,
      enableAutoStabilization: true,
    });
    console.log(photo?.path);
    if (photo) {
      await RNFS.readFile(photo.path, 'base64').then(async res => {
        console.log(res);
        await service.sendImage(res);
      });
    }
  };

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          backgroundColor: 'white',
          zIndex: 1,
        }}>
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
        <View style={{flex: 1}}>
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

  return (
    <View style={{flex: 1}}>
      {renderHeader()}

      {renderCamera()}

      {renderFooter()}
    </View>
  );
}

export default CameraScreen;
