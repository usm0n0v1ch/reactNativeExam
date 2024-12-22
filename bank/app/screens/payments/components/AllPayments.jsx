
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
export default function AllPayments() {
  const navigation = useNavigation();
  const payments = [
    { id: 1, name: 'QR-оплата', icon: 'qrcode', to: 'QR' },
    { id: 2, name: 'Коммунальные платежи', icon: 'home', to: '/' },
    { id: 3, name: 'Телевидение', icon: 'tv', to: '/' },
    { id: 4, name: 'Домашний телефон', icon: 'phone', to: '/' },
    { id: 5, name: 'Мобильные операторы', icon: 'mobile', to: '/' },
    { id: 6, name: 'Интернет', icon: 'wifi', to: '/' },
    { id: 7, name: 'Государственные услуги', icon: 'university', to: '/' },
    { id: 8, name: 'IP-телефония', icon: 'globe', to: '/' },
    { id: 9, name: 'Онлайн площадки', icon: 'cloud', to: '/' },
    { id:10, name:'Образование', icon:'book', to:'/' },
    { id:11, name:'Благотворительность', icon:'gift', to:'/' },
  ];
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row', alignItems:'center',gap:'10%'}}>
        <Icon name="arrow-left" size={20} color="black" style={{ padding: 10, margin: 10, top:3}} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 10, margin: 10, textAlign:'center' }}>
          Все платежи
        </Text>
      </TouchableOpacity>
      
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 20,
          margin: 10,
        }}
      >
        {payments.map((option, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              width: 80,
              height: 100,
              gap: 10,
              padding: 10,
              borderRadius: 12,
            }}
          >
            <Icon
              name={option.icon}
              size={30}
              color="green"
              style={{
                padding: 20,
                backgroundColor: 'white',
                borderRadius: 50, // Сделает фон иконки кругом
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ fontSize: 12 }}>{option.name}</Text>
          </View>
        ))}
      </View>

    </View>
  );
}