import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Button} from 'react-native';
import ScreenA from './screenA';
import ScreenB from './screenB';
import ScreenC from './screenC';

const MaterialTopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const NativeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

const App = () => {
  const [visible, setVisible] = React.useState(0);
  return (
    <NavigationContainer>
      <View style={{}}>
        <Button
          title="MATERIAL TOP BAR"
          onPress={() => {
            setVisible(0);
          }}
        />
        <Button
          title="STACK"
          onPress={() => {
            setVisible(1);
          }}
        />
        <Button
          title="NATIVE STACK"
          onPress={() => {
            setVisible(2);
          }}
        />
        <Button
          title="DRAWER"
          onPress={() => {
            setVisible(3);
          }}
        />
        <Button
          title="BOTTOM TABS"
          onPress={() => {
            setVisible(4);
          }}
        />
        <Button
          title="MATERIAL BOTTOM TABS"
          onPress={() => {
            setVisible(5);
          }}
        />
      </View>
      {visible === 0 && (
        <MaterialTopTab.Navigator>
          <MaterialTopTab.Screen name="ScreenA" component={ScreenA} />
          <MaterialTopTab.Screen name="ScreenB" component={ScreenB} />
          <MaterialTopTab.Screen name="ScreenC" component={ScreenC} />
        </MaterialTopTab.Navigator>
      )}
      {visible === 1 && (
        <Stack.Navigator>
          <Stack.Screen name="ScreenA" component={ScreenA} />
          <Stack.Screen name="ScreenB" component={ScreenB} />
          <Stack.Screen name="ScreenC" component={ScreenC} />
        </Stack.Navigator>
      )}
      {visible === 2 && (
        <NativeStack.Navigator>
          <NativeStack.Screen name="ScreenA" component={ScreenA} />
          <NativeStack.Screen name="ScreenB" component={ScreenB} />
          <NativeStack.Screen name="ScreenC" component={ScreenC} />
        </NativeStack.Navigator>
      )}
      {visible === 3 && (
        <Drawer.Navigator>
          <Drawer.Screen name="ScreenA" component={ScreenA} />
          <Drawer.Screen name="ScreenB" component={ScreenB} />
          <Drawer.Screen name="ScreenC" component={ScreenC} />
        </Drawer.Navigator>
      )}
      {visible === 4 && (
        <BottomTab.Navigator>
          <BottomTab.Screen name="ScreenA" component={ScreenA} />
          <BottomTab.Screen name="ScreenB" component={ScreenB} />
          <BottomTab.Screen name="ScreenC" component={ScreenC} />
        </BottomTab.Navigator>
      )}
      {visible === 5 && (
        <MaterialBottomTab.Navigator>
          <MaterialBottomTab.Screen name="ScreenA" component={ScreenA} />
          <MaterialBottomTab.Screen name="ScreenB" component={ScreenB} />
          <MaterialBottomTab.Screen name="ScreenC" component={ScreenC} />
        </MaterialBottomTab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
