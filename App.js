import React, {useRef, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';


const CountUp = ({num}) =>{
  const aniVal = useRef(new Animated.Value(0)).current;
  const [x, setX] = useState(0);



  useEffect(() => {
    aniVal.addListener((progress) => {

      setX(progress.value.toFixed(0))
    });

    Animated.timing(aniVal, {
      toValue: num,
      duration: 2000,
      easing:Easing.elastic(1.5),
      useNativeDriver:true
    }).start();
  }, []);

  return <Animated.Text>{x}</Animated.Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <CountUp num={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
