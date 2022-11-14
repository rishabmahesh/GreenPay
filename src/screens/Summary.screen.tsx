import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';

function SummaryScreen({route}: any) {
  const {summary} = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#daeddb',
    },
    topPart: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      height: 60,
      width: '100%',
    },
    summaryText: {
      fontSize: 28,
      color: 'black',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    rowText: {
      fontSize: 18,
      color: 'black',
      paddingVertical: 8,
    },
    rowTextBold: {
      fontWeight: 'bold',
    },
    divider: {
      height: 2,
      color: 'black',
      width: '90%',
      alignSelf: 'center',
    },
    statsText: {
      fontSize: 18,
      color: 'black',
      paddingVertical: 8,
      textAlign: 'center',
    },
  });

  //write function to extract VENDOR_NAME from summary.metadata
  const extractVendorName = (summary1: any) => {
    const vendorName = summary1.metadata.find(
      (item: any) => item.VENDOR_NAME,
    ).VENDOR_NAME;
    return vendorName;
  };

  //write function to extract TOTAL from summary.metadata
  const extractTotal = (summary1: any) => {
    const total = summary1.metadata.find((item: any) => item.TOTAL).TOTAL;
    return total;
  };

  function displaySummary() {
    return (
      <View>
        <View style={styles.row}>
          <Text style={[styles.rowText, styles.rowTextBold]}>Item Name</Text>
          <Text style={[styles.rowText, styles.rowTextBold]}>Price</Text>
        </View>
        <Divider style={styles.divider} />

        {summary.items.map(
          (
            item: {
              ITEM:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              PRICE:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            },
            index: React.Key | null | undefined,
          ) => {
            // price = item.PRICE;
            return (
              <View key={index} style={styles.row}>
                <Text style={styles.rowText}>{item.ITEM}</Text>
                <Text style={styles.rowText}>{item.PRICE}</Text>
              </View>
            );
          },
        )}
      </View>
    );
  }

  function displayHeader() {
    return (
      <View style={styles.topPart}>
        <Text style={styles.summaryText}>Summary</Text>
      </View>
    );
  }

  function displayStats() {
    return (
      <View>
        <Text style={styles.statsText}>
          Store Name: {extractVendorName(summary)}
        </Text>
        <Text style={styles.statsText}>
          Total Price: {extractTotal(summary)}
        </Text>
        <Text style={styles.statsText}>
          Points Earned: {summary.points_added}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {displayHeader()}
        {displayStats()}
        {displaySummary()}
      </View>
    </ScrollView>
  );
}

export default SummaryScreen;
