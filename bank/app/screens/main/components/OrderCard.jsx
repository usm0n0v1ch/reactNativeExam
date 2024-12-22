
import { TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default function OrderCard({ navigation}) {
    return (
        <View>
            <View  style={{padding: 10, flexDirection:'row', alignItems:'center', }}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="arrow-back" size={24} color="black" /></TouchableOpacity>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft:'20%'}}>Заказать карту</Text>
                
            </View>
        </View>
    )
}