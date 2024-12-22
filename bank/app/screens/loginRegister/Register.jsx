import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const data = await response.json();

      // Сохраняем токены и user_id в SecureStore
      await SecureStore.setItemAsync('accessToken', data.access);
      await SecureStore.setItemAsync('refreshToken', data.refresh);
      await SecureStore.setItemAsync('userId', String(data.user_id));

      Alert.alert('Успешно', `Вы зарегистрированы: ${username}`, [
        { text: 'OK', onPress: () => navigation.navigate('Main') },
      ]);
      navigation.navigate('TabScreen')
    } catch (error) {
      Alert.alert('Ошибка', error.message);
    }
  };

  return (
    <View >
      <Text >Регистрация</Text>
      <TextInput
        
        placeholder="Имя"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Зарегистрироваться" onPress={handleRegister} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')} >
        <Text >Уже есть аккаунт? Войти</Text>
      </TouchableOpacity>
    </View>
  );
}


