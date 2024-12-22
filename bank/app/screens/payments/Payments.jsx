import { BlurView } from 'expo-blur';
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
export default function Payments() {
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
  ];

  return (
    <View>
      <TextInput
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 12,
          backgroundColor: 'white',
        }}
        placeholder="Поиск"
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          padding: 10,
          margin: 10,
        }}
      >
        Платежи
      </Text>

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

      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          margin: 20,
        }}
        onPress={() => navigation.navigate('AllPayments')}
      >
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
          }}
        >
          Показать все
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'green',
          padding: 20,
          borderRadius: 12,
          gap: 20,
        }}
      >
        <Icon name="credit-card" size={20} color="white" />
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            flex: 1, // Распределяет пространство для текста
          }}
        >
          Погашение кредитов МКБанка
        </Text>
        <Icon name="chevron-right" size={20} color="white" />
      </TouchableOpacity>

      <ImageBackground
        source={require('../../assets/home.png')}
        style={{
          flexDirection: 'column',
          margin: 10,
          borderRadius: 12,
          height: 200,
          overflow: 'hidden', // Обрезает изображение по границам
        }}
        imageStyle={{
          borderRadius: 12, // Радиус для самого изображения
        }}
      >

        
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              margin: 10,
              backgroundColor:'rgba(255, 255, 255, 0.6)',
              borderRadius: 12,

            }}
          >
            <Icon name="home" size={30} color='green' style={{margin:20}} />
            <Text style={{color:'green', fontSize:20, fontWeight:'bold'}}>Мой дом</Text>
          </View>
        
        
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: 10,
            gap: 20,
            backgroundColor:'rgba(255, 255, 255, 0.6)',
            borderRadius: 12,
            padding: 10,
            
          }}
        >
          <Text style={{color:'green', right:'-20', fontSize:20, fontWeight:'bold', top:'-3px'}}>Добавить свой дом</Text>
          <Icon name="plus" size={25} color={'green'} />
        </View>
      </ImageBackground>
    </View>
  );
}
