import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddCardScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [balance, setBalance] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      // Получаем userId из AsyncStorage
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) {
        Alert.alert('Ошибка', 'Не удалось получить userId. Выполните вход заново.');
        return;
      }

      // Собираем данные для новой карты
      const newCard = {
        name: name.trim(),
        number: number.replace(/\s+/g, ''), // Удаляем пробелы
        date: date.trim(),
        balance: parseInt(balance, 10),
        password: password.trim(),
        user: userId,
      };

      // Отправляем POST-запрос на сервер
      const response = await fetch('http://localhost:8000/cards/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка при создании карты');
      }

      Alert.alert('Успех', 'Карта успешно создана!');
      
      // Обновляем предыдущий экран
      if (route.params?.onRefresh) {
        route.params.onRefresh();
      }
      
      navigation.goBack(); // Возвращаемся на предыдущий экран
    } catch (error) {
      console.error('Ошибка:', error);
      Alert.alert('Ошибка', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добавить новую карту</Text>
      <TextInput
        style={styles.input}
        placeholder="Имя карты"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Номер карты (16 цифр)"
        value={number}
        keyboardType="number-pad"
        maxLength={16}
        onChangeText={setNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Срок действия (MM/YY)"
        value={date}
        maxLength={5}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Баланс"
        value={balance}
        keyboardType="numeric"
        onChangeText={setBalance}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль (4 цифры)"
        value={password}
        secureTextEntry
        maxLength={4}
        keyboardType="number-pad"
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Создать карту</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
