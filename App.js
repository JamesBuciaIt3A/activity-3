import { StyleSheet, Text, View, Button, Image} from 'react-native';
import React, { useState } from 'react';

const Flight = ({ onBackPress }) => {
  const [isOn, setIsOn] = useState(true);

  const toggleFLASHLIGHT = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
      <View style={{ marginBottom: 100, marginTop: 100 }}>
        {isOn ? (
          <Image source={require('./assets/images/torchoff.png')} style={{ height: 200, width: 200 }} />
        ) : (
          <Image source={require('./assets/images/torchon.png')} style={{ height: 200, width: 200 }} />
        )}
      </View>

      <View style={{ marginBottom: 20 }}>
        <Button title={isOn ? "ON" : "OFF"} onPress={toggleFLASHLIGHT} />
      </View>
      <View>
        <Button title="BACK" onPress={onBackPress} />
      </View>
    </View>
  );
};
const Counter = ({ onBackPress }) => {
  const [number, setNumber] = useState(0);
  const setAdd = () => {
    setNumber(number + 1);
  };
  const setSubtract = () => {
    setNumber(number - 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 300 }}>{number}</Text>
      <View style={{ flexDirection: 'row', height: 40, width: 100, gap: 100 }}>
        <Button title="-1" color="red" onPress={() => setSubtract()} />
        <Button title="+1" color="blue" onPress={() => setAdd()} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="BACK" onPress={onBackPress} />
      </View>
    </View>
  );
};

export default function App() {
  const [flight, setFlight] = useState(false);
  const [counter, setCounter] = useState(false);

  const toggleFlight = () => {
    setFlight(!flight);
    setCounter(false);
  };

  const toggleCounter = () => {
    setCounter(!counter);
    setFlight(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', columnGap: 85 }}>
        <View>
          <Button title="FLASHLIGHT" onPress={toggleFlight} disabled={flight || counter} />
        </View>
        <View></View>
        <Button title="COUNTER" onPress={toggleCounter} disabled={flight || counter} />
      </View>
      <View>
        {flight && <Flight onBackPress={toggleFlight} />}
      </View>
      <View>
        {counter && <Counter onBackPress={toggleCounter} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    margin: 20,
  },
  bottonUpper: {
    color: 'blue',
  },
});