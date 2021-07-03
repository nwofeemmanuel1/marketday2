import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
} from 'react-native';

const App = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>
        Empty Shoopping Cart Please Add An item to Cart to Get Started
        </Text>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{ rotate: RotateData }],
          }}
          source={{
            uri:
              'https://thumbs.dreamstime.com/b/supermarket-shopping-empty-cart-isolated-white-vector-illustration-dark-trolley-carrying-products-goods-88417201.jpg',
          }}
        />
      
        {startImageRotateFunction()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
    // backgroundColor: '#C2C2C2',
  },
 text: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
    color:'red'
  },

});

export default App;
