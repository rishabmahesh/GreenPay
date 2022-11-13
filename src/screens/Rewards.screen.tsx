import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Button,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RewardsScreenProps} from '../utils/types';
import {Camera} from 'react-native-vision-camera';
import service from '../services/service';

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
  const [userPoints, setUserPoints] = React.useState(1000);
  const [refreshing] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const response = await service.rewards();
      if (response.rewards) {
        setRewardsList(response.rewards);
      }
      if (response.balance) {
        setUserPoints(response.balance);
      }
    }

    fetchData();
  }, []);

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
        <Text style={styles.pointsText}>{userPoints}</Text>
      </View>
    );
  }

  function displayRewardItem(item: {
    product_name: string;
    cost: string;
    img_url: string;
  }) {
    return (
      <Pressable
        style={styles.rewardItemBox}
        onPress={() =>
          navigation.navigate('RedeemScreen', {
            brand_name: item.product_name,
            img_url: item.img_url,
            points: item.cost,
          })
        }>
        <View>
          <Image source={{uri: item.img_url}} style={styles.brandImage} />
        </View>

        <View>
          <Text>{item.product_name}</Text>
          <Text>{item.cost}</Text>
        </View>
      </Pressable>
    );
  }

  function displayRewards() {
    return (
      <View style={styles.brandsStyle}>
        <Text style={styles.brandsText}>Available rewards: </Text>

        <ScrollView horizontal={false}>
          {rewardsList.map((item, index) => {
            return <View key={index}>{displayRewardItem(item)}</View>;
          })}
        </ScrollView>
      </View>
    );
  }

  const refetchData = async () => {
    const response = await service.rewards();
    if (response.rewards) {
      setRewardsList(response.rewards);
    }
    if (response.balance) {
      setUserPoints(response.balance);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetchData} />
      }>
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
