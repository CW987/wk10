import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

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
    <View id="Shop2">
      <TouchableOpacity onPress={clicked}>
        <Text>{props.heading}</Text>
        <Text>Price: {props.upgradeCost}</Text>
      </TouchableOpacity>
      {currentValue ? <Text>{props.content}</Text> : null}
    </View>
  );
}
