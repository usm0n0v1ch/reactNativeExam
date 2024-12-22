import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LineTwo(){
    const navigation = useNavigation();

    const options = [
        { id: 1, title: 'Мои карты', icon: 'credit-card', to:'MyCards' },
        { id: 2, title: 'QR-оплата', icon: 'qrcode', to:'QR' },
        { id: 3, title: 'Обмен валют', icon: 'exchange', to:'Exchange' },
        { id: 4, title: 'Заказать карту', icon: 'id-card', to:'OrderCard' },
    ];
    const page = (to) =>{
        navigation.navigate(to);
    }
    return(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:10, backgroundColor:'#fff', margin:10, borderRadius:12}}>
            {options.map((option, index) =>(
                <TouchableOpacity onPress={() => page(option.to)} key={index} style={{flexDirection:'column', alignItems:'center', justifyContent:'center', padding:10, gap:5}}>
                    <Icon name={option.icon} size={20} color='green' style={{backgroundColor:'hsl(120, 50%, 90%) ',padding:10, borderRadius:100}}/>
                    <Text style={{fontSize:12}}>{option.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}