
import { Touchable, TouchableOpacity, View} from 'react-native';
import LineOne from './components/LineOne';
import LineTwo from './components/LineTwo';
import Balance from './components/Balance';
import AddCard from './components/AddCard';
import CardList from './components/CardList';
import Animation from './components/Animation';

export default function Main({ navigation}) {
  return (
    <View>
      <LineOne />
      <LineTwo/>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
        <Balance />
        <TouchableOpacity onPress={() => navigation.navigate('AddCardScreen')}>
          <AddCard />
        </TouchableOpacity>
        
      </View>
      <CardList />
      <Animation />
    </View>
  );
}