import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ExploreScreenProps} from '../utils/types';
import {Searchbar} from 'react-native-paper';

function ExploreScreen() {
  const navigation = useNavigation<ExploreScreenProps>();

  const [searchQuery, setSearchQuery] = React.useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
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
  });

  function topPart() {
    return (
      <View style={styles.topPart}>
        <Text style={styles.welcomeText}>Welcome</Text>

        <View style={styles.pointsView}>
          <Text style={styles.pointsText}>1000</Text>
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

  

  return (
    <View style={styles.container}>
      {topPart()}
      {searchBar()}
    </View>
  );
}

export default ExploreScreen;
