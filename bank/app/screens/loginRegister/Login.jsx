import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
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

      // Сохраняем токены и user_id в AsyncStorage
      await AsyncStorage.setItem('accessToken', data.access);
      await AsyncStorage.setItem('refreshToken', data.refresh);
      await AsyncStorage.setItem('userId', String(data.user_id));

      Alert.alert('Успешно', `Добро пожаловать, ${username}`, [
        { text: 'OK', onPress: () => navigation.navigate('Main') },
      ]);

      navigation.navigate('TabScreen');
    } catch (error) {
      Alert.alert('Ошибка', error.message);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Вход</Text>
        <TextInput
          style={styles.input}
          placeholder="Имя"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button title="Войти" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
          <Text style={styles.registerText}>Нет аккаунта? Зарегистрируйтесь</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  registerButton: {
    marginTop: 16,
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
