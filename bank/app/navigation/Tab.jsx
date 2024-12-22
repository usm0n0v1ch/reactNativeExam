
// import React from 'react';
// import { View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons
// import Main from '../screens/main/Main';
// import Transactions from '../screens/transactions/Transactions';
// import Payments from '../screens/payments/Payments';
// import Monitoring from '../screens/monitoring/Monitoring';
// import Menu from '../screens/menu/Menu';
// import Navigation from '../navigation/Navigation';

// const Tab = createBottomTabNavigator();


// export function TabScreen(props) {
//     return(
//         <View>
//             <Tab.Navigator
//             screenOptions={{
//               tabBarActiveTintColor: 'green', // Active tab text and icon color
//               tabBarInactiveTintColor: 'gray', // Inactive tab text and icon color
//               tabBarLabelPosition: 'below-icon', // Place label beside icon
//               tabBarStyle: {
//                 height: 70, // Set custom height to give more space
//                 paddingBottom: 10, // Adjust bottom padding to move up
//               },
//             }}
//           >
//             <Tab.Screen
//               name="Main"
//               component={Main}
//               options={{
//                 tabBarIcon: ({ focused, color, size }) => (
//                   <Icon
//                     name={focused ? 'home' : 'home-outline'}
//                     size={size}
//                     color={color}
//                   />
//                 ),
//                 tabBarLabel: 'Главная', // Title above the icon
//                 tabBarLabelStyle: {
//                   fontSize: 12, // Change font size of the label
//                   fontWeight: 'bold', // Make the label bold
//                 },
//               }}
//             />
//             <Tab.Screen
//               name="Transactions"
//               component={Transactions}
//               options={{
//                 tabBarIcon: ({ focused, color, size }) => (
//                   <Icon
//                     name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'}
//                     size={size}
//                     color={color}
//                   />
//                 ),
//                 tabBarLabel: 'Переводы',
//                 tabBarLabelStyle: {
//                   fontSize: 12,
//                   fontWeight: 'bold',
//                 },
//               }}
//             />
//             <Tab.Screen
//               name="Payments"
//               component={Payments}
//               options={{
//                 tabBarIcon: ({ focused, color, size }) => (
//                   <Icon
//                     name={focused ? 'wallet' : 'wallet-outline'}
//                     size={size}
//                     color={color}
//                   />
//                 ),
//                 tabBarLabel: 'Платежи',
//                 tabBarLabelStyle: {
//                   fontSize: 12,
//                   fontWeight: 'bold',
//                 },
//               }}
//             />
//             <Tab.Screen
//               name="Monitoring"
//               component={Monitoring}
//               options={{
//                 tabBarIcon: ({ focused, color, size }) => (
//                   <Icon
//                     name={focused ? 'analytics' : 'analytics-outline'}
//                     size={size}
//                     color={color}
//                   />
//                 ),
//                 tabBarLabel: 'Мониторинг',
//                 tabBarLabelStyle: {
//                   fontSize: 12,
//                   fontWeight: 'bold',
//                 },
//               }}
//             />
//             <Tab.Screen
//               name="Menu"
//               component={Menu}
//               options={{
//                 tabBarIcon: ({ focused, color, size }) => (
//                   <Icon
//                     name={focused ? 'menu' : 'menu-outline'}
//                     size={size}
//                     color={color}
//                   />
//                 ),
//                 tabBarLabel: 'Меню',
//                 tabBarLabelStyle: {
//                   fontSize: 12,
//                   fontWeight: 'bold',
//                 },
//               }}
//             />
//           </Tab.Navigator>
//         </View>
//     )
// }