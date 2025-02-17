export default function Shop1(props) {
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
    <>
      <button onClick={clicked} className="Shops">
        <p>Clicker Next Level</p>

        <p>Price: {props.upgradeCost}</p>
      </button>
      {currentValue ? <p>{props.content}</p> : null}
    </>
  );
}
