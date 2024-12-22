import { View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddCard() {
    return (
        <View>
            <Icon name="credit-card-plus" size={30} color="green" style={{padding:10, borderTopLeftRadius: 50, borderBottomLeftRadius:50,backgroundColor:'white'}}/>
        </View>
    );
}
