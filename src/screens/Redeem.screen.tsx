import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RewardsScreenProps} from '../utils/types';
import {Button, TextInput} from 'react-native-paper';
import service from '../services/service';

function RedeemScreen({route}: any) {
  const navigation = useNavigation<RewardsScreenProps>();

  const {brand_name, points, img_url} = route.params;
  const [text, setText] = React.useState('');
  const [pressed, setPressed] = React.useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#daeddb',
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
    emailView: {
      paddingHorizontal: 16,
    },
    emailText: {
      fontSize: 20,
      color: 'black',
      marginHorizontal: 4,
    },
    button: {
      width: 100,
    },
    buttonView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
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
      <View style={styles.emailView}>
        <Text style={styles.emailText}>
          Enter your email to redeem points:{' '}
        </Text>
        <TextInput
          label="Email"
          value={text}
          onChangeText={email => setText(email)}
        />
      </View>
    );
  }

  function submitButton() {
    return (
      <View style={styles.buttonView}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={buttonPressed}
          color="#00B8AB">
          Submit
        </Button>
      </View>
    );
  }

  const buttonPressed = async () => {
    await service.reducePoints(points);
    setPressed(true);
  };

  return (
    <View style={styles.container}>
      {renderImage()}
      {renderPoints()}
      {renderEmailInput()}
      {submitButton()}
      {pressed && (
        <Text style={styles.emailText}>
          You have successfully redeemed {points} points!
        </Text>
      )}
    </View>
  );
}

export default RedeemScreen;
