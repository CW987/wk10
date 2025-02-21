import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Shop1 from "./Upgrades/Shop1";
import Shop2 from "./Upgrades/Shop2";
import CookieCounter from "./components/CookieCounter";
import CookieImages from "./components/cookies/array";
import React from "react";

export default function Index() {
  // Consts

  const [items, setItems] = React.useState<any[]>([]);
  const [count, setCount] = React.useState(0);
  const [shop1, setShop1] = React.useState(0);
  const [shop2, setShop2] = React.useState(0);
  const [shop1Count, setShop1Count] = React.useState(0);
  const [shop2Count, setShop2Count] = React.useState(0);
  const [cookieData, setCookieData] = React.useState(0);
  // console.log(shop1);

  // Consts

  // API

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      console.log(`Data Received`);
      setItems(data);
      setShop1Count(data[shop1].increase);
      setShop2Count(data[shop2].increase);
      setCookieData(data);
    }
    fetchData();
  }, [shop1, shop2, items]);

  // API

  // Timer

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + shop2Count);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [shop2Count]);

  // Timer

  return (
    <View
    // style={{
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>Count:{count}</Text>
      </View>

      {/* Cookie  */}

      <View style={styles.cookie}>
        <TouchableOpacity
          onPress={() => setCount((count) => count + shop1Count)}
        >
          <Image source={CookieImages[shop1]} style={styles.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount((count) => count - 1)}>
          <Text>Dropped one!</Text>
        </TouchableOpacity>
      </View>

      {/* Cookie */}

      {/*  Upgrade Buttons */}

      {/* <div id="Shop1Button"> */}
      <View style={styles.buttonsDiv}>
        {items.map((item) => {
          return (
            item.id == shop1 + 1 && (
              <Shop1
                key={item.id}
                heading={item.name}
                shopValue={shop1}
                setShop={setShop1}
                setCount={setCount}
                shopID={item.id}
                count={count}
                upgradeCost={item.cost}
                clicks={() => setShop1(item.id)}
              />
            )
          );
        })}
        {items.map((item) => {
          return (
            item.id == shop2 + 1 && (
              <Shop2
                key={item.id}
                heading={item.name}
                shopValue={shop2}
                setShop={setShop2}
                setCount={setCount}
                shopID={item.id}
                count={count}
                upgradeCost={item.cost}
                clicks={() => setShop2(item.id)}
              />
            )
          );
        })}
      </View>
      {/* </View> */}
      {/* </div> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 400,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsDiv: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  cookie: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    minWidth: 130,
    height: 40,
    backgroundColor: "#80ed99",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#57cc99",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
