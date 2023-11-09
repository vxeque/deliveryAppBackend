import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export function ButtonCount(params) {
  const [count, setCount] = useState(0);
    const [mountProduct, setMountProduct] = useState(0.0)

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
      // Llamamos a la función pasada desde el componente padre
    //   params.onCountChange(count + 1);
      params.onCountChange(count);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
    // if (count < 0) {
      setCount(count - 1);

      // Llamamos a la función pasada desde el componente padre
      params.onCountChange();
    }
  };

  return (
    <View style={style.styleContedNumber}>
      <TouchableOpacity onPress={decrementCount} style={style.buttonLeft}>
        <Text style={style.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={style.countText}>{count}</Text>

      <TouchableOpacity onPress={incrementCount} style={[style.buttonRight]}>
        <Text style={style.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  // **
  buttonLeft: {
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  // **
  buttonRight: {
    backgroundColor: "#D9D9D9",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginRight: 0,
  },
  // **
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },

  // **
  countText: {
    fontSize: 15,
  },

  // **
  styleContedNumber: {
    flexDirection: "row",
    paddingTop: 3,
    paddingBottom: 3,
  },
});
