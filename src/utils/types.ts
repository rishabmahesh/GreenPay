import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type rewardItem = {
  brand_name: string;
  points: string;
  img_url: string;
};

export type BottomTabNavigatorParams = {
  Explore: undefined;
  Rewards: undefined;
};

export type ExploreStackParams = {
  ExploreScreen: undefined;
};

export type RewardsStackParams = {
  RewardsScreen: undefined;
  RedeemScreen: rewardItem;
  CameraScreen: undefined;
};

export type ExploreScreenProps = CompositeNavigationProp<
  NativeStackNavigationProp<ExploreStackParams>,
  MaterialBottomTabNavigationProp<BottomTabNavigatorParams>
>;

export type RewardsScreenProps = CompositeNavigationProp<
  NativeStackNavigationProp<RewardsStackParams>,
  MaterialBottomTabNavigationProp<BottomTabNavigatorParams>
>;
