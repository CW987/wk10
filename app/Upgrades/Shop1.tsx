import { Text, View, TouchableOpacity } from "react-native";

export default function Shop1(props: any) {
  const currentValue = props.shopID === props.shopValue + 1;

  function clicked() {
    if (props.count >= props.upgradeCost) {
      props.clicks();
      props.setCount(props.count - props.upgradeCost);
    } else {
      alert("You need more points for this!");
    }
    console.log("Clicked");
  }

  return (
    <View id="Shop1">
      <TouchableOpacity onPress={clicked}>
        <Text>Clicker Next Level</Text>
        <Text>Price: {props.upgradeCost}</Text>
      </TouchableOpacity>
      {currentValue ? <Text>{props.content}</Text> : null}
    </View>
  );
}
