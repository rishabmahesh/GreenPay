import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ExploreScreenProps} from '../utils/types';

function RewardsScreen() {
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
      <Text>Rewards Screen</Text>
    </View>
  );
}

export default RewardsScreen;
