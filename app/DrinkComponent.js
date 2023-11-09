import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ButtonCount } from "./components/ButttonCount";
import { enableExpoCliLogging } from "expo/build/logs/Logs";

export function DrinkComponent({ drink }) {
  const [addProduct, SetAddProduct] = useState(0.0);
  const [contadorProductos, setContadorProductos] = useState(0);

  function onPress(amount, price) {
    SetAddProduct(price);
  }

  return (
    <View style={style.styleContend}>
      <View>
        <Text>{drink.nombre}</Text>
        <Text style={style.stylePrice}>+ ${drink.precio}</Text>
      </View>

      {addProduct > 0 ? (
        <ButtonCount
          onCountChange={(count) => {
            // console.log("cantidad", addProduct),
            onPress(count, parseFloat(drink.precio));
          }}
        />
      ) : (
        <TouchableOpacity
          style={style.styleAddition}
          onPress={() => onPress(1, parseFloat(drink.precio))}
        >
          <Text style={style.styleAddition}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  styleContend: {
    flexDirection: "row",
    marginTop: -1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 3,
    justifyContent: "space-between",
  },
  styleAddition: {
    fontSize: 25,
    marginLeft: 20,
    marginRight: 10,
  },
  stylePrice: {
    fontWeight: "bold",
  },
  contendContador: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
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
  buttonRight: {
    backgroundColor: "#D9D9D9",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginRight: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  countText: {
    fontSize: 15,
  },
  styleContedNumber: {
    flexDirection: "row",
    paddingTop: 3,
    paddingBottom: 3,
    marginRight: -25,
  },
});
