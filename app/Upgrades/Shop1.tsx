import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

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
      <TouchableOpacity onPress={clicked} style={[styles.button]}>
        <Text style={styles.text}>Cookie Next Level</Text>
        <Text style={styles.text}>Price: {props.upgradeCost}</Text>
      </TouchableOpacity>
      {currentValue ? <Text>{props.content}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    minWidth: 180,
    maxWidth: 400,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#80ed99",
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
