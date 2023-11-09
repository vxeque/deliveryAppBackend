import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

// import components
import { Saurcers } from "./components/Saurcers";

export function RestaurantMenu() {
  // saucer image
  const saucerImage = require("./img/comidaVector.jpg");
  const ImgSoda = require("./img/soda.jpeg");

  const imgs = [saucerImage, ImgSoda];

  const [data, setData] = useState(null);
  const dataProducts = require("./data.json");

  // para obtener los parametros que se les pasa
  const route = useRoute(); 
  
  const {name, productRestaurant, idRestaurant} = route.params; 

  return (
    <View style={styles.styleContainer}>
      <Text style={styles.styleMenu}>Menú</Text>
      <Text style={styles.styleRestaurant}>{name}</Text>

      <Saurcers img={imgs} dataProducts={productRestaurant} idRestaurant={idRestaurant}/>
    </View>
  );
}

const styles = StyleSheet.create({
  styleContainer: {
    backgroundColor: "white",
    flex: 3,
  },
  styleMenu: {
    fontSize: 25,
    width: "100%",
    height: "auto",
    textAlign: "center",
    // backgroundColor:'#d1d1d1'
  },
  styleRestaurant: {
    fontSize: 15,
    width: "100%",
    height: "auto",
    textAlign: "center",
    // backgroundColor:'#d1d1d1',
    fontStyle: "italic",
  },
});
