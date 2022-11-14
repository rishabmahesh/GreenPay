import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ExploreScreen from '../screens/Explore.screen';
import {
  BottomTabNavigatorParams,
  CameraStackParams,
  ExploreStackParams,
  RewardsStackParams,
} from '../utils/types';
import RewardsScreen from '../screens/Rewards.screen';
import CameraScreen from '../screens/Camera.screen';
import RedeemScreen from '../screens/Redeem.screen';
import SummaryScreen from '../screens/Summary.screen';
import AD from 'react-native-vector-icons/AntDesign';

const ExploreStack = () => {
  const NativeExploreStack = createNativeStackNavigator<ExploreStackParams>();

  return (
    <NativeExploreStack.Navigator>
      <NativeExploreStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
      />
    </NativeExploreStack.Navigator>
  );
};

const RewardsStack = () => {
  const NativeShelfStack = createNativeStackNavigator<RewardsStackParams>();

  return (
    <NativeShelfStack.Navigator>
      <NativeShelfStack.Screen name="RewardsScreen" component={RewardsScreen} />
      <NativeShelfStack.Screen name="RedeemScreen" component={RedeemScreen} />
    </NativeShelfStack.Navigator>
  );
};

const CameraStack = () => {
  const NativeShelfStack = createNativeStackNavigator<CameraStackParams>();

  return (
    <NativeShelfStack.Navigator>
      <NativeShelfStack.Screen name="CameraScreen" component={CameraScreen} />
      <NativeShelfStack.Screen name="SummaryScreen" component={SummaryScreen} />
    </NativeShelfStack.Navigator>
  );
};

function Routes() {
  const Tab = createMaterialBottomTabNavigator<BottomTabNavigatorParams>();

  return (
    <Tab.Navigator barStyle={{backgroundColor: '#00B8AB'}}>
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => <AD name="home" color={color} size={18} />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraStack}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({color}) => <AD name="camera" color={color} size={18} />,
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardsStack}
        options={{
          tabBarLabel: 'Rewards',
          tabBarIcon: ({color}) => <AD name="gift" color={color} size={18} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
