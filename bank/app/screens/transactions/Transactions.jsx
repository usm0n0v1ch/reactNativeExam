
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Transactions() {
  const options = [
    {
      id:1,
      title:'Перевод на карту',
      icon:'credit-card'
    },
    {
      id:2,
      title:'Операции с кошельком',
      icon:'wallet'
    },
    {
      id:3,
      title:'Обмен валюты',
      icon:'currency-usd'
    },
    {
      id:4,
      title:'Перевод на номер',
      icon:'phone'
    },
    {
      id:5,
      title:'Сбор денег',
      icon:'heart'
    },
    {
      id:6,
      title:'Снять наличные',
      icon:'cash-register'
    },
    {
      id:7,
      title:'Перевод на счет',
      icon:'bank'
    },
    {
      id:8,
      title:'Автоплатежи',
      icon:'clock'
    },
    {
      id:9,
      title:'Меж-ые платежи',
      icon:'earth'
    }
  ]

  return (
    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', flexWrap:'wrap', gap:30, margin:10}}>
      {options.map((option, index) => (
        <View key={index} style={{flexDirection:'column', alignItems:'start', width:100, height:100, gap:10, backgroundColor:'white', padding:10, borderRadius:12}} >
          <Icon name={option.icon} size={20} color='green' style={{padding:10, backgroundColor:'hsl(120, 50%, 90%)', borderRadius:50}} />
          <Text style={{fontSize:12}}>{option.title}</Text>
        </View>
      ))}
    </View>
  );
}