import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RewardsScreenProps} from '../utils/types';

function RedeemScreen({route}: any) {
  const navigation = useNavigation<RewardsScreenProps>();

  const {brand_name, points, img_url} = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>
        Redeem Screen {brand_name} {points} {img_url}
      </Text>
    </View>
  );
}

export default RedeemScreen;
