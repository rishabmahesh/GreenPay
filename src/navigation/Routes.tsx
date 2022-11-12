import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ExploreScreen from '../screens/Explore.screen';
import {
  BottomTabNavigatorParams,
  ExploreStackParams,
  RewardsStackParams,
} from '../utils/types';
import RewardsScreen from '../screens/Rewards.screen';
import CameraScreen from '../screens/Camera.screen';

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
      <NativeShelfStack.Screen name="CameraScreen" component={CameraScreen} />
    </NativeShelfStack.Navigator>
  );
};

function Routes() {
  const Tab = createMaterialBottomTabNavigator<BottomTabNavigatorParams>();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Rewards" component={RewardsStack} />
    </Tab.Navigator>
  );
}

export default Routes;
