import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CookieCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <TouchableOpacity onPress={() => setCount((count) => count + 1)}>
        <Text>More Cookies!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount((count) => count - 1)}>
        <Text >Dropped one!</Text>
      </TouchableOpacity>
      <Text >There are {count} cookies in your hands fatty</Text>
    </View>
  );
};

export default CookieCounter;
