import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Shop1 from "./Upgrades/Shop1";
import Shop2 from "./Upgrades/Shop2";
import CookieCounter from "./components/CookieCounter";
import CookieImages from "./components/cookies/array";

export default function Index() {
  // Consts

  const [items, setItems] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [shop1, setShop1] = useState(0);
  const [shop2, setShop2] = useState(0);
  const [shop1Count, setShop1Count] = useState(0);
  const [shop2Count, setShop2Count] = useState(0);
  const [cookieData, setCookieData] = useState(0);
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
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Count:{count}</Text>
        <Image source={CookieImages[shop1]} style={styles.image}></Image>
        {/* <Snowfall /> */}
      </View>
      {/*  Upgrade Buttons */}

      {/* <div id="Shop1Button"> */}
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
      {/* </div> */}

      {/* Upgrade Buttons */}

      <Text>Edit app/index.tsx to edit this screen.</Text>

      <CookieCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
