import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function CardList({ navigation }) {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
            const response = await fetch('http://localhost:8000/cards');
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error('Ошибка загрузки карт:', error);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const deleteCard = async (cardId) => {
        try {
            const response = await fetch(`http://localhost:8000/cards/${cardId}/`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Не удалось удалить карту');
            }

            Alert.alert('Успех', 'Карта успешно удалена');
            
            setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
        } catch (error) {
            console.error('Ошибка удаления карты:', error);
            Alert.alert('Ошибка', 'Не удалось удалить карту');
        }
    };

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardNumber}>{item.number}</Text>
            <Text style={styles.cardBalance}>Баланс: {item.balance} UZS</Text>
            <Text style={styles.cardDate}>Срок: {item.date}</Text>
            <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => deleteCard(item.id)}
            >
                <Text style={styles.deleteButtonText}>Удалить</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList
                data={cards}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 10,
    },
    card: {
        width: '100%',
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
    deleteButton: {
        marginTop: 10,
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
