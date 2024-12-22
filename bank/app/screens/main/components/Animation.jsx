import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

export default function Animation() {
    const scale = useSharedValue(1); 


    React.useEffect(() => {
        scale.value = withRepeat(
            withTiming(1.5, { duration: 1000, easing: Easing.ease }),
            -1, 
            true 
        );
    }, []);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <View style={styles.container} >
            <Animated.View style={[styles.circle, animatedStyle]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 100,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50, 
        backgroundColor: 'green',
    },
});
