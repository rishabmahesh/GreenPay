import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RewardsScreenProps} from '../utils/types';

function RedeemScreen({route}: any) {
  const navigation = useNavigation<RewardsScreenProps>();

  const {brand_name, points, img_url} = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    pointsView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    pointsText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    imageStyle: {
      width: 200,
      height: 200,
    },
  });

  function renderImage() {
    return (
      <View style={styles.imageView}>
        <Image source={{uri: img_url}} style={styles.imageStyle} />
      </View>
    );
  }

  function renderPoints() {
    return (
      <View style={styles.pointsView}>
        <Text style={styles.pointsText}>{points}</Text>
      </View>
    );
  }

  function renderEmailInput() {
    return (
      <View>
        <Text>Enter your email</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderImage()}
      {renderPoints()}
    </View>
  );
}

export default RedeemScreen;
