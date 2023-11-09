import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Text } from 'react-native';


export function ShoppingCart(params) {
  const imageCart = require("./img/shoppingCart.png");
  const navigation = useNavigation();
  const route = useRoute();

  const { nameProduct, priceProduct, product } = route.params;
  const totalPay = 0;

  function onPress() {
    navigation.navigate("sendOrder", {product});
  }

  return (
    <View style={style.styleConted}>
      <Text style={style.styleText}>Delivery+</Text>
      <Image source={imageCart} style={style.styleImgCart}></Image>

      <View style={style.styleContedViewProduct}>
        <Text style={style.styleNameProduct}>Productos</Text>
        <View style={style.styleListProduc}>
          <Text>{nameProduct}</Text>
          <Text>${priceProduct} MXN</Text>
        </View>
        <View style={style.styleTotalPay}>
          <Text>Total a pagar</Text>
          <Text>${priceProduct} MXN</Text>
        </View>
      </View>
      <TouchableOpacity style={style.styleButtonPay} onPress={() => onPress()}>
        <Text style={style.textPay}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  styleConted: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  styleContedViewProduct: {
    width: "80%",
  },
  styleText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
  },
  styleListProduc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  styleImgCart: {
    marginTop: 50,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  styleNameProduct: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  styleTotalPay: {
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  styleButtonPay: {
    backgroundColor: "#0FFF6F",
    padding: 12,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 15,
    marginTop: "20%",
    color: "white",
  },
  textPay: {
    // color:'white'
  },
  // borderTopColor:"d1d1d1"
});
