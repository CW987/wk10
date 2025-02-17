import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Shop1 from "./Upgrades/Shop1";

export default function Index() {
  const [items, setItems] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [shop1, setShop1] = useState(0);
  const [shop2, setShop2] = useState(0);
  const [shop1Count, setShop1Count] = useState(0);
  const [shop2Count, setShop2Count] = useState(0);
  const [cookieData, setCookieData] = useState(0);

  // API

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(
  //         "https://cookie-upgrade-api.vercel.app/api/upgrades"
  //       );
  //       const data = await response.json();
  //       console.log(`Data Received`);
  //       setItems(data);
  //       setShop1Count(data[shop1].increase);
  //       setShop2Count(data[shop2 - 1].increase);
  //       setCookieData(data);
  //     } catch (error) {
  //       console.error("Data failed");
  //     }
  //   }
  //   fetchData();
  // }, [items, shop1, shop2, shop1Count, shop2Count]);

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

  // console.log(items);

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

  // Upgrade Button

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{count}</Text>
      <div id="Shop1Button">
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
      </div>
      <button id="Shop2Button">Shop2</button>
    </View>
  );
}
