import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RewardsScreenProps} from '../utils/types';
import {Camera} from 'react-native-vision-camera';

function RewardsScreen() {
  const navigation = useNavigation<RewardsScreenProps>();

  const [rewardsList, setRewardsList] = React.useState([
    {
      brand_name: 'GoldFish',
      points: '1000 points for 10 dollars',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '1000 points for 10 dollars',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '1000 points for 10 dollars',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '1000 points for 10 dollars',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '1000 points for 10 dollars',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topPart: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      height: 60,
      width: '100%',
      backgroundColor: 'red',
    },
    rewardsText: {
      fontSize: 28,
      color: 'black',
    },
    displayUserPoints: {
      alignItems: 'center',
    },
    pointsText: {
      padding: 8,
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold',
    },
    brandsStyle: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    brandsText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    brandImage: {
      width: 100,
      height: 100,
    },
    rewardItemBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 8,
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 16,
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

  function topPart() {
    return (
      <View style={styles.topPart}>
        <Text style={styles.rewardsText}>Rewards</Text>
      </View>
    );
  }

  function displayPoints() {
    return (
      <View style={styles.displayUserPoints}>
        <Text style={styles.pointsText}>Your Points</Text>
        <Text style={styles.pointsText}>0</Text>
      </View>
    );
  }

  function displayRewardItem(item: {
    brand_name: any;
    points: any;
    img_url: any;
  }) {
    return (
      <View style={styles.rewardItemBox}>
        <View>
          <Image source={{uri: item.img_url}} style={styles.brandImage} />
        </View>

        <View>
          <Text>{item.brand_name}</Text>
          <Text>{item.points}</Text>
        </View>
      </View>
    );
  }

  function displayRewards() {
    return (
      <View style={styles.brandsStyle}>
        <Text style={styles.brandsText}>Brands</Text>

        <ScrollView horizontal={false}>
          {rewardsList.map(item => {
            return displayRewardItem(item);
          })}
        </ScrollView>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {topPart()}
        {displayPoints()}
        {displayRewards()}
        {/* <Button title="Open Camera" onPress={openCamera} color="#841584" /> */}
      </View>
    </ScrollView>
  );
}

export default RewardsScreen;
