import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from "react-native";

export function DataClientSend(params) {
//   const imageVisa = require("./visaCard.jpg");
  const [clienteApi, setClienteApi] = useState("");

  const link = "7f70-187-184-113-252.ngrok-free.app";
  const dataClienteApi = `http://${link}/delivery/api/v1/client/3/`;

  useEffect(() => {
    fetch(dataClienteApi)
      .then((apiClient) => apiClient.json())
      .then((dataClient) => setClienteApi(dataClient));
  });

  return (
    <View>
      <View style={style.styleConted}>
        <TouchableOpacity style={style.buttonAddress}>
          <Text>{clienteApi.direccion}</Text>
          <Text>{">"}</Text>
        </TouchableOpacity>

        <View style={style.styleNameClient}>
          <Text>
            {clienteApi.nombre} {clienteApi.apellido_paterno}{" "}
            {clienteApi.apellido_materno}
          </Text>
          <Text>{clienteApi.telefono}</Text>
        </View>

        <View style={style.styleDataSend}>
          <Text>Método de entrega</Text>
          <Text>Entrega en puerta</Text>
        </View>
        <View style={style.styleDataSend}>
          <Text>LLegada estimada</Text>
          <Text>18-33 min</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  styleConted: {
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    padding: 10,
  },
  buttonAddress: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleNameClient: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    // padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
  },
  styleDataSend: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  styleImgVisa: {
    width: 35,
    height: 35,
  },
});
