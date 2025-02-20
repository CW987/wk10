import React from "react";
import { View, StyleSheet, Dimensions, Image, Animated } from "react-native";

const { width, height } = Dimensions.get("window");

const Snowflake = ({ x, y, opacity, scale }) => (
  <Animated.Image
    source={require("../cookies/Cookie1.png")} // Use your image
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: 30 * scale,
      height: 30 * scale,
      opacity,
    }}
  />
);

const Snowfall = () => {
  const flakes = Array.from({ length: 50 }).map((_, i) => ({
    x: new Animated.Value(Math.random() * width),
    y: new Animated.Value(-Math.random() * height),
    opacity: new Animated.Value(Math.random()),
    scale: Math.random() * 0.5 + 0.5,
  }));

  React.useEffect(() => {
    flakes.forEach((flake) => {
      Animated.loop(
        Animated.timing(flake.y, {
          toValue: height,
          duration: Math.random() * 80000 + 80000,
          useNativeDriver: true,
        })
      ).start();
    });
  }, []);

  return (
    <View style={styles.container}>
      {flakes.map((flake, index) => (
        <Snowflake key={index} {...flake} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default Snowfall;
