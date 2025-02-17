import { useEffect, useState } from "react";

export default function Timer({ params }) {
  const [items, setItems] = useState([]);
  const [count, setCount] = params;
  const [shop1, setShop1] = useState(0);
  const [shop2, setShop2] = useState(0);
  const [shop1Count, setShop1Count] = useState(0);
  const [shop2Count, setShop2Count] = useState(0);
  const [cookieData, setCookieData] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setItems(data);
      setShop1Count(data[shop1].increase);
      setShop2Count(data[shop2].increase);
      setCookieData(data);
    }
    fetchData();
  }, [items, shop1, shop2, shop1Count, shop2Count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + shop2Count);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [shop2Count]);
}
