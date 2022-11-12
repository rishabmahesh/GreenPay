import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ExploreScreenProps} from '../utils/types';

function ExploreScreen() {
  const navigation = useNavigation<ExploreScreenProps>();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  );
}

export default ExploreScreen;
