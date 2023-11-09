import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import { UserCarBuy } from "./components/User_CarBuy";
import { ChooseRestaurant } from "./components/chooseRestaurant";

import { urlApi } from "./urlApi";

export function Restaurant() {
  // imagenes de restaurantes se optienen de la carpeta
  // del proyecto y no viene de una base de datos
  const tioArtesano = require("../app/img/tioArtesano.jpg");
  const oshidesu = require("../app/img/Oshidesu.jpg");
  const texasHamburger = require("../app/img/texasHamburger.jpg");

  // console.log(urlApi());

  // const URL_API = "https://2277-187-184-113-252.ngrok-free.app";
  // const URL_API = "https://1aa1-187-184-113-252.ngrok-free.app";
  // const URL_API = "https://390e-187-184-113-252.ngrok-free.app";
  // const URL_API = "https://3f3f-187-184-113-252.ngrok-free.app";
  // const URL_API = "https://7f70-187-184-113-252.ngrok-free.app";
  // const URL_API = "https://8e4a-187-184-112-252.ngrok-free.app";
  const URL_API = `https://${urlApi()}`;

  // se guardan las imagenes de los restaurantes en una lista
  const imgRestaurant = [tioArtesano, oshidesu, texasHamburger];
  const [listRestaurant, setListRestaurant] = useState("");

  const [idRestaurant, setIdRestaurant] = useState("");

  // se optiene la api del backend
  useEffect(() => {
    fetch(`${URL_API}/delivery/api/v1/restaurant/`)
      .then((listRestaurant) => listRestaurant.json())
      .then((dataListRestaurant) => {
        setListRestaurant(dataListRestaurant);
        // console.log(dataListRestaurant)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image source={miImagen} style={styles.ImgUser}/> */}
      <UserCarBuy></UserCarBuy>

      <TextInput
        style={[styles.TextInputAddress]}
        placeholder="📍Agregar ubicación"
        // cursorColor={''}
      ></TextInput>

      <TextInput
        style={[styles.TextInputAddress, styles.TextSearchProduts]}
        placeholder="🔍 Buscar productos"
      ></TextInput>

      <Text style={styles.text}>Selecciona un restaurante</Text>

      <ChooseRestaurant
        profileRestaurant={imgRestaurant}
        listRestaurant={listRestaurant}
      ></ChooseRestaurant>

      {/* <TouchableOpacity>
        <Text style={styles.button}>Seleccionar Producto</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: "auto",
    height: "100%",
  },
  circularImage: {
    flex: 1, // Para asegurarse de que la imagen ocupe todo el contenedor circular
    // width: null, // Para que la imagen use el ancho completo del contenedor
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    color: "black",
    marginTop: "20%",
    marginBottom: 10,
  },
  button: {
    marginBottom: 0,
    marginTop: 10,
    backgroundColor: "#009c00",
    borderRadius: 5,
    padding: 10,
    color: "white",
  },
  TextInputAddress: {
    width: 250,
    height: 35,
    textAlign: "center",
    borderColor: "white",
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#D1D1D1",
    // marginTop: 'auto',
    marginTop: "30%",
  },
  TextSearchProduts: {
    marginTop: 40,
    // marginBottom:'auto'
  },
  ImgUser: {
    width: 45,
    height: 45,
    borderRadius: 75,
    marginTop: 0,
    alignItems: "flex-start",
    marginRight: 250,
  },
});
