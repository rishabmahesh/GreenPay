import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ExploreScreenProps} from '../utils/types';
import {Searchbar} from 'react-native-paper';
import service from '../services/service';

function ExploreScreen() {
  const navigation = useNavigation<ExploreScreenProps>();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [brandList, setBrandList] = React.useState([
    {
      brand_name: 'GoldFish',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
  ]);
  const [offerList, setOfferList] = React.useState([
    {
      brand_name: 'GoldFish',
      points: '100',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '100',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '100',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '100',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
    {
      brand_name: 'GoldFish',
      points: '100',
      img_url:
        'https://www.campbellsfoodservice.com/wp-content/uploads/2016/01/goldfish-logo-400x150.png',
    },
  ]);
  const [userPoints, setUserPoints] = React.useState(1000);

  React.useEffect(() => {
    async function fetchData() {
      const response = await service.home();
      if (response.brands) {
        setBrandList(response.brands);
      }
      if (response.offers) {
        setOfferList(response.offers);
      }
      if (response.users.user1) {
        setUserPoints(response.users.user1.points);
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
    welcomeText: {
      fontSize: 28,
      color: 'black',
    },
    pointsView: {
      flexDirection: 'row',
      backgroundColor: 'yellow',
      borderRadius: 16,
    },
    pointsText: {
      padding: 8,
    },
    searchBar: {
      backgroundColor: 'white',
      borderRadius: 16,
      marginHorizontal: 16,
      borderColor: 'black',
      borderWidth: 2,
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
    brandNameText: {
      fontSize: 16,
      color: 'black',
    },
    brandBox: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 8,
    },
    offerItemBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 8,
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 16,
    },
    text: {
      fontSize: 16,
      color: 'black',
    },
  });

  function topPart() {
    return (
      <View style={styles.topPart}>
        <Text style={styles.welcomeText}>Welcome</Text>

        <View style={styles.pointsView}>
          <Text style={styles.pointsText}>{userPoints}</Text>
        </View>
      </View>
    );
  }

  function searchBar() {
    return (
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        style={styles.searchBar}
      />
    );
  }

  function displayBrandItem(item: {brand_name: string; img_url: string}) {
    return (
      <View style={styles.brandBox}>
        <Image source={{uri: item.img_url}} style={styles.brandImage} />
        <Text style={styles.brandNameText}>{item.brand_name}</Text>
      </View>
    );
  }

  function renderBrands() {
    return (
      <View style={styles.brandsStyle}>
        <Text style={styles.brandsText}>Brands</Text>

        <ScrollView horizontal={true}>
          {brandList.map((item, index) => {
            return <View key={index}>{displayBrandItem(item)}</View>;
          })}
        </ScrollView>
      </View>
    );
  }

  function renderOfferItem(item: {
    item_name: string;
    points: string;
    img_url: string;
  }) {
    return (
      <View style={styles.offerItemBox}>
        <View>
          <Image source={{uri: item.img_url}} style={styles.brandImage} />
        </View>

        <View>
          <Text style={styles.text}>{item.item_name + '\n'}</Text>
          <Text style={styles.text}>{item.points + ' points'}</Text>
        </View>
      </View>
    );
  }

  function renderOffers() {
    return (
      <View style={styles.brandsStyle}>
        <Text style={styles.brandsText}>Offers</Text>

        <ScrollView horizontal={false}>
          {offerList.map((item, index) => {
            return <View key={index}>{renderOfferItem(item)}</View>;
          })}
        </ScrollView>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {topPart()}
        {searchBar()}
        {renderBrands()}
        {renderOffers()}
      </View>
    </ScrollView>
  );
}

export default ExploreScreen;
