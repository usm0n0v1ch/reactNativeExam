
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Balance(){
    const [isHidden, setIsHidden] = useState(false);
    const [cards, setCards] = useState([]); 
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:8000/cards');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Ошибка загрузки карт:', error);
            }
        };
        fetchCards();
    }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании компонента.
    const balance = cards.reduce((acc, card) => acc + card.balance, 0);
    
    const toggleVisibility = () =>{
        setIsHidden(!isHidden);
    }

    const balanceStr = balance.toString();
    const hiddenBalance = '*'.repeat(balanceStr.replace('.','').length)

    
    return(
        <View style={{flexDirection:'row', alignItems:'center', gap:10, margin:10}}>
            <Icon name='chevron-down' size={15} />
            <Text style={{fontSize:25, width:200}}>
                {isHidden ? hiddenBalance : `${balanceStr}`} UZS
            </Text>
            <TouchableOpacity onPress={toggleVisibility}>
                <Icon name={isHidden ? 'eye-slash':'eye'} size={25} color='green' />
            </TouchableOpacity>
            
        </View>
    )
}