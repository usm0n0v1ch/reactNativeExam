import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function MyCards({ navigation }) {
    const cards = [
        {
            id: 1,
            name: 'Карта 1',
            number: '1234567890123456',
            date: '12/12',
            balance: 1000,
            password: '1234',
        },
        {
            id: 2,
            name: 'Карта 2',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 3,
            name: 'Карта 3',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 4,
            name: 'Карта 4',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 5,
            name: 'Карта 5',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 6,
            name: 'Карта 6',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 7,
            name: 'Карта 7',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 8,
            name: 'Карта 8',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 9,
            name: 'Карта 9',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
        {
            id: 10,
            name: 'Карта 10',
            number: '1234567890123456',
            date: '12/12',
            balance: 12300,
            password: '1234',
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Мои карты</Text>
                <Icon name="add" size={24} color="black" />
            </View>
            <ScrollView contentContainerStyle={styles.cardsList}>
                {cards.map((card) => (
                    <View key={card.id} style={styles.card}>
                        <Text style={styles.cardName}>{card.name}</Text>
                        <Text style={styles.cardNumber}>{card.number}</Text>
                        <Text style={styles.cardBalance}>Баланс: {card.balance}₽</Text>
                        <Text style={styles.cardDate}>Срок: {card.date}</Text>
                        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('CardDetails', { card })}>
                            <Text style={styles.cardButtonText}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardsList: {
        padding: 10,
        flexGrow: 1, // This ensures the ScrollView stretches to take all the available space.
    },
    card: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    cardName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardNumber: {
        fontSize: 16,
        marginVertical: 5,
    },
    cardBalance: {
        fontSize: 16,
        color: 'green',
    },
    cardDate: {
        fontSize: 14,
        marginVertical: 5,
    },
    cardButton: {
        marginTop: 10,
        backgroundColor: '#007bff',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    cardButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
