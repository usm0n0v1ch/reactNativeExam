import { View, Text } from 'react-native';
import Login from '../loginRegister/Login';
import Register from '../loginRegister/Register';
export default function Menu() {
  
  return (
    <View>
      <Login/>
      <Register/>
    </View>
  );
}