import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const duration = 3500;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function Revolver() {
  const sv = useSharedValue(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    if (!isSpinning) {
      sv.value = withTiming(1, { duration, easing });
      setIsSpinning(true);
    } else {
      sv.value = 0; // Stop the animation
      setIsSpinning(false);
    }
    setClicked(true);
  };

  const handleReset = () => {
    setClicked(false);
    setIsSpinning(false);
    sv.value = 0; // Stop any ongoing animation
  };


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 720}deg` }],
  }));

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Click to test your luck</Text>
        </View>
        <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View style={[animatedStyle]}>
                <Image
                source={require('../images/revolver.png')}
                style={styles.cylinderImage}
                />
            </Animated.View>
        </TouchableWithoutFeedback>
        {clicked && (
        <View>
          <Text style={styles.resultText}>You spun the revolver!</Text>
        </View>
      )}
      <Button style={styles.button} title="Spin Again!" onPress={handleReset} />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 80,
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 200, // Adjusted height to fit properly in the Home component
    },
    cylinderImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain', // Adjust how the image fits within its container
    },
    text: {
      fontSize: 35,
      marginBottom: 20,
      resizeMode: 'contain', // Adjust how the image fits within its container
    },
    resultText: {
        fontSize: 35,
        marginTop: 20,
        color: 'green',
    },
    button: {
        marginTop: 50,
    },
  });