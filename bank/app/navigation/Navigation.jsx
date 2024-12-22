import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import Main from '../screens/main/Main';
import Transactions from '../screens/transactions/Transactions';
import Payments from '../screens/payments/Payments';
import Monitoring from '../screens/monitoring/Monitoring';
import Menu from '../screens/menu/Menu';
import MyCards from '../screens/main/components/MyCards';
import QR from '../screens/main/components/QR';
import Exchange from '../screens/main/components/Exchange';
import OrderCard from '../screens/main/components/OrderCard';
import AllPayments from '../screens/payments/components/AllPayments';
import Login from '../screens/loginRegister/Login';
import Register from '../screens/loginRegister/Register';
import AddCardScreen from '../screens/main/components/AddCardScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabScreen() {


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
          headerShown: false,
          tabBarLabel: 'Главная',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'} size={size} color={color} />
          ),
          headerShown: false,
          tabBarLabel: 'Переводы',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'wallet' : 'wallet-outline'} size={size} color={color} />
          ),
          headerShown: false,
          tabBarLabel: 'Платежи',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Monitoring"
        component={Monitoring}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'analytics' : 'analytics-outline'} size={size} color={color} />
          ),
          tabBarLabel: 'Мониторинг',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'person' : 'person-outline'} size={size} color={color} />
          ),
          tabBarLabel: 'Профиль',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}


export default function Navigation() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabScreen" component={TabScreen} options={{headerShown: false}} />
        <Stack.Screen name="MyCards" component={MyCards} options={{headerShown: false}} />
        <Stack.Screen name="QR" component={QR} options={{headerShown: false}} />
        <Stack.Screen name="Exchange" component={Exchange} options={{headerShown: false}} />
        <Stack.Screen name="OrderCard" component={OrderCard} options={{headerShown: false}} />
        <Stack.Screen name='AllPayments' component={AllPayments} options={{headerShown: false}} />
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
        <Stack.Screen name='AddCardScreen' component={AddCardScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    
  );
}
