import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlApi } from "./urlApi";

export function SendOrder(params) {
  const imageVisa = require("./img/visaCard.jpg");
  const [clienteApi, setClienteApi] = useState("");

  const route = useRoute();
  const { product } = route.params;
  const [dataRestaurant, setRestaurant] = useState("");

  const link = urlApi();

  const dataClienteApi = `http://${link}/delivery/api/v1/client/3/`;
  const linkApiRestaurant = `https://${link}/delivery/api/v1/restaurant/${product.restauranteid}/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataClienteApi);
        if (!response.ok) {
          throw new Error("Network request failed");
        }
        const dataClient = await response.json();
        setClienteApi(dataClient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // console.log(clienteApi);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(linkApiRestaurant);
        if (!response.ok) {
          throw new Error("Network request failed");
        }
        const restaurantData = await response.json();
        // Hacer algo con restaurantData
        setRestaurant(restaurantData);
        // console.log(dataRestaurant);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurantData();
  }, [linkApiRestaurant]);

  const navigation = useNavigation();

  function onclickMethodPay() {
    navigation.navigate("methodPay");
  }

  function onPress(send) {
    navigation.navigate("trackingOrder");
  }

  return (
    <ScrollView>
      <View style={style.styleContend}>
        {/* <View> */}
        <View style={style.styleContedComponent}>
          {/* Data client */}
          <TouchableOpacity style={style.buttonAddress}>
            <Text style={style.styleFontMain}>{clienteApi.direccion}</Text>
            <Text>{">"}</Text>
          </TouchableOpacity>

          <View style={style.styleNameClient}>
            <Text style={style.styleFontMain}>
              {clienteApi.nombre} {clienteApi.apellido_paterno}{" "}
              {clienteApi.apellido_materno}
            </Text>
            <Text>{clienteApi.telefono}</Text>
          </View>

          <View style={style.styleDataSend}>
            <Text>Método de entrega</Text>
            <Text style={style.styleFontMain}>Entrega en puerta</Text>
          </View>
          <View style={style.styleDataSend}>
            <Text>LLegada estimada</Text>
            <Text style={style.styleFontMain}>18-33 min</Text>
          </View>
        </View>

        {/* payment method */}
        <View style={[style.styleContedComponent]}>
          <Text style={style.styleFontMain}>Método de pago</Text>
          <TouchableOpacity
            style={[style.buttonAddress]}
            onPress={() => onclickMethodPay()}
          >
            <Image source={imageVisa} style={style.styleImgVisa}></Image>
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>

        <View style={style.styleContedComponent}>
          <View style={style.styleRestauranDetail}>
            <Text style={style.styleFontMain}>{dataRestaurant.nombre} </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              ({dataRestaurant.direccion})
            </Text>
            <Text style={style.styleEditarPedido}>Editar pedido</Text>
          </View>
          <View style={style.styleDetailOrder}>
            <Text>{product.nombre}</Text>
            <Text style={style.styleFontMain}>${product.precio} MXN</Text>
          </View>
        </View>

        <View style={style.styleContedComponent}>
          <View style={style.styleTarifa}>
            <Text style={style.styleFontMain}>Tarifa del pedido</Text>
            <Text style={style.styleFontMain}>${product.precio} MXN</Text>
          </View>
          <View style={style.styleTarifa}>
            <Text style={style.styleFont}>Total en productos</Text>
            <Text style={style.styleFont}>${product.precio} MXN</Text>
          </View>
          <View style={style.styleTarifa}>
            <Text style={style.styleFont}>Cupones descuentos</Text>
            <Text style={style.styleFont}>No disponible {">"}</Text>
          </View>
          <View style={style.styleTarifa}>
            <Text style={style.styleFontMain}>Tarifa del pedido</Text>
            <Text style={style.styleFontMain}>${product.precio} MXN</Text>
          </View>
          <View style={style.styleTarifa}>
            <Text style={style.styleFont}>Tarifa de Entrega</Text>
            <Text style={style.styleFont}>$30.00 MXN</Text>
          </View>
          <View style={style.styleTarifa}>
            <Text style={style.styleFont}>Cupones de entrega</Text>
            <Text style={style.styleFont}>No disponible {">"}</Text>
          </View>
          <View style={style.styleTarifa}>
            <Text style={style.styleFontMain}>Total</Text>
            <Text style={style.styleFontMain}>$00.00 MXN</Text>
          </View>
        </View>

        <Text style={style.styleTextTerminosCondiciones}>
          La tienda entregara este pedido. Al hacer clic en el boton de pago,
          permites que enviemos tu nombre, tu direccion y tu numero de contacto
          a la tienda para que pueda realizar la entrega
        </Text>

        <View style={style.stylePayProduct}>
          <Text style={style.stylePricePay}>${product.precio} MXN</Text>
          <TouchableOpacity
            style={style.styleButtonOrder}
            onPress={() => onPress()}
          >
            <Text>Ordenar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  styleContend: {
    flex: 3,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  styleContedComponent: {
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    padding: 10,
  },
  buttonAddress: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleImgVisa: {
    width: 35,
    height: 35,
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
  styleContedComponent: {
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    padding: 10,
  },
  styleRestauranDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    // alignItems: "center",
  },
  styleEditarPedido: {
    marginLeft: 10,
    color: "#F1890E",
  },
  styleDetailOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleTextTerminosCondiciones: {
    margin: 18,
  },
  styleTarifa: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleFont: {
    color: "#726C6C",
  },
  styleFontMain: {
    fontWeight: "bold",
  },
  stylePayProduct: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: -2,
    // marginTop:2,
    // marginBottom:-2,
    padding: 15,
    // borderWidth:1,
    // borderWidth: 1,           // Todos los bordes
    borderTopWidth: 1, // Borde superior
    borderLeftWidth: 1, // Borde izquierdo
    borderRightWidth: 1, // Borde derecho
    borderBottomWidth: 0, // No aplicar borde inferior
    borderColor: "black", // Color del borde
    marginBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  styleButtonOrder: {
    backgroundColor: "#0FFF6F",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
  },
  stylePricePay: {
    fontSize: 18,
  },
});
