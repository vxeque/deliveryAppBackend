import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { urlApi } from "../urlApi";

export function ChooseRestaurant({ profileRestaurant, listRestaurant }) {
  const navigation = useNavigation();

  const [listProduct, setListProduct] = useState("");

  const LinkProduct = `https://${urlApi()}/delivery/api/v1/products/`;
  // const LinkProduct = `https://8e4a-187-184-112-252.ngrok-free.app/delivery/api/v1/products/`;
  // "https://8e4a-187-184-112-252.ngrok-free.app/delivery/api/v1/products/";
  // "https://7f70-187-184-113-252.ngrok-free.app/delivery/api/v1/products/";
  // "https://3f3f-187-184-113-252.ngrok-free.app/delivery/api/v1/products/";
  // "https://390e-187-184-113-252.ngrok-free.app/delivery/api/v1/products/";
  // "https://1aa1-187-184-113-252.ngrok-free.app/delivery/api/v1/products/";
  // "https://2277-187-184-113-252.ngrok-free.app/delivery/api/v1/products/";

  useEffect(() => {
    fetch(`${LinkProduct}`)
      .then((listProduct) => listProduct.json())
      .then((dataListProduct) => {
        setListProduct(dataListProduct);
      })
      .catch((error) => console.log(error));
  }, []);

  // programar la logica para que de aqui cuando se presione redireccione directo al
  // menu del restaurante elegido **************************************
  function onPress(index) {
    // console.log(listRestaurant);
    listRestaurant.map((restaurant, indexMap) => {
      // optenemos los datos del ultimo valor del id del string y lo comparamos con el index
      // del parametro de la función le sumamos 1 para que no tengamos valores de 0
      if (
        restaurant.id_restaurante[restaurant.id_restaurante.length - 1] ==
        index + 1
      ) {
        // console.log(restaurant.id_restaurante);
        // console.log(restaurant.nombre);

        const productRestaurantId = listProduct.filter(
          (objetoFilter) =>
            objetoFilter.restauranteid == restaurant.id_restaurante
        );
        // console.log(productRestaurantId);

        // programar el navegador que nos redigira al menu del restaurante
        navigation.navigate("Menu", {
          name: restaurant.nombre,
          productRestaurant: productRestaurantId,
          idRestaurant: restaurant.id_restaurante,
        });
      }
    });
  }

  return (
    <View style={styles.container}>
      {profileRestaurant.map((restaurantImg, index) => (
        <TouchableOpacity key={index} onPress={() => onPress(index)}>
          <Image key={index} source={restaurantImg} style={styles.img}></Image>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 75,
    margin: 15,
    // marginLeft:5,
    // marginRight:5,
  },
});
