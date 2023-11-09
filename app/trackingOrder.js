import React, { useEffect, useState } from "react";
// import * as React from "react-native";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

import { urlApi } from "./urlApi";

import MapView, { Marker, Polyline } from "react-native-maps";

import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_KEY } from "@env";

const motoRepartidor = require("./img/moto.png");
const imgCasa = require("./img/casa.png");

export function TrackingOrder(params) {
  const imgTelephone = require("./img/telephone.png");
  const imgMesagge = require("./img/Mesagge.png");
  const imgUsers = require("./img/users.png");
  const mas = require("./img/mas.png");

  const [apiDealers, setApiDealers] = useState("");
  const [propina, setPropina] = useState(10.0);
  const [order, setOrder] = useState("");

  // select dealers
  const IdDealers = Math.floor(Math.random() * 4) + 1;

  const urlApiDealers = `https://${urlApi()}/delivery/api/v1/dealers/${IdDealers}`;
  const urlOrder = `https://${urlApi()}/delivery/api/v1/order/1/`;

  // console.log(GOOGLE_MAPS_KEY);

  useEffect(() => {
    fetch(urlApiDealers)
      .then((dealersApi) => dealersApi.json())
      .then((selectedMan) => setApiDealers(selectedMan))
      .catch((error) => console.log("error al llamar a la api: ", error));
  }, []);

  useEffect(() => {
    fetch(urlOrder)
      .then((apiOrder) => {
        return apiOrder.json();
      })
      .then((order) => {
        setOrder(order);
      })
      .catch((err) =>
        console.error("error al cargar los datos de la orden:", err)
      );
  }, []);

  const [origin, setOrigin] = useState({
    latitude: 19.8460215135251,
    longitude: -90.53697707029654,
  });

  const [destination, setDestination] = useState({
    latitude: 19.86533695072047,
    longitude: -90.49896004405743,
  });

  return (
    <View style={style.styleContedMain}>
      <View>
        <MapView
          style={style.styleMapsView}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            longitudeDelta: 0.09,
            latitudeDelta: 0.04,
          }}
        >
          <Marker
            coordinate={origin}
            draggable
            onDragStart={(direction) =>
              setOrigin(direction.nativeEvent.coordinate)
            }
            image={motoRepartidor}
          ></Marker>

          <Marker coordinate={destination} image={imgCasa}></Marker>

          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_KEY}
            strokeWidth={3}
          />

          {/* <Polyline
            coordinates={[origin, destination]}
            strokeColor="black"
            // strokeWidth={5}
          ></Polyline> */}
        </MapView>
      </View>

      <View style={style.styleContedInfo}>
        {/* img user */}
        <Image source={imgUsers} style={style.styleImgUsers} />

        {/* name of dealers */}
        <View>
          <Text style={style.styleFontName}>{apiDealers.nombre}</Text>
          <Text>Tu repartidor de Delivery+</Text>
        </View>

        {/* img telephone - message */}
        <Image source={imgTelephone} style={style.styleImgTM} />
        <Image source={imgMesagge} style={style.styleImgTM} />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Text style={{ color: "#736E6E" }}>PROPINA</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ marginRight: 5, marginTop: 10, color: "#736E6E" }}>
            $ {propina.toFixed(2)}
          </Text>
          <TouchableOpacity>
            <Image
              source={mas}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                margin: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <ActivityIndicator color={"#000"} />
          <Text>Hora de entrega: {order.horaentrega}</Text>
        </View>
        <Text style={{ color: "#736E6E" }}>{order.estado}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  styleContedMain: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  styleImgUsers: {
    width: 60,
    height: 80,
    resizeMode: "contain",
  },
  styleContedInfo: {
    // borderWidth: 1,
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  styleContedInfoTranking: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleImgTM: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  styleFontName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  styleMapsView: {
    width: "100%",
    height: 400,
  },
});
