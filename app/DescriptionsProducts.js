import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DrinkComponent } from "./DrinkComponent";
import { ButtonCount } from "./components/ButttonCount";
import { useNavigation } from "@react-navigation/native";

export function DescriptionsProducts() {
  const image = require("./img/comidaVector.jpg");
  const route = useRoute();
  const navigation = useNavigation();

  // obtenemos los datos que vienen del componente
  // pasado por el router
  const { imgSaurcers, dataProducts, drink } = route.params;

  // console.log(dataProducts);

  const [count, setCount] = useState(0);

  const [amountProduct, setAmountProduct] = useState(0);

  function onPress(nombre, precio) {
    const Products = {
      nameProduct:nombre,
      priceProduct:precio,
      product:dataProducts
    };
    navigation.navigate("shoppingCart", Products);
  }

  return (
    <View style={style.contendMain}>
      {/* reparar esta imagen ya que llevara la url de la api */}
      <Image style={style.imgSaurcers} source={image} />
      <View style={style.contend}>
        <Text style={[style.styleName]}>{dataProducts.nombre}</Text>
        <Text style={style.styleDescriptions}>{dataProducts.descripcion}</Text>
        <Text style={style.stylePrice}>${dataProducts.precio}0 MXN</Text>
        <Text>Elige el sabor de tu bebida</Text>

        {/* bebida componente */}
        {drink.map((productDrink, index) => {
          return <DrinkComponent key={index} drink={productDrink} />;
        })}

        <View style={style.contendContador}>
          <View style={style.styleContedSelecctPlatillos}>
            <Text>Cantidad de platillos</Text>
            <ButtonCount
              onCountChange={(count) =>
                console.log("cantidad de platillos", count)
              }
            />
          </View>

          <TouchableOpacity
            style={style.styleAdd}
            onPress={() => onPress(dataProducts.nombre, dataProducts.precio)}
          >
            <Text style={style.styleText}>Agregar ${} MX</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  contendMain: { backgroundColor: "white", height: "100%" },
  contend: {
    backgroundColor: "#ffff",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -40,
    borderTopLeftRadius: 30, // Redondea la esquina superior izquierda
    borderTopRightRadius: 30, // Redondea la esquina superior derecha
  },
  imgSaurcers: { width: "100%", height: "40%" },
  stylePrice: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 3,
    paddingBottom: 3,
  },
  styleDescriptions: {
    fontSize: 17,
    marginRight: 18,
  },
  styleName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contendContador: {
    // backgroundColor:'#',
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  styleAdd: {
    backgroundColor: "#009c00",
    padding: 6,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
  },
  styleText: {
    color: "white",
  },
  styleContador: {
    fontSize: 15,
    flexDirection: "row",
  },
  styleContedSelecctPlatillos: {
    alignItems: "center",
    justifyContent: "center",
  },
});
