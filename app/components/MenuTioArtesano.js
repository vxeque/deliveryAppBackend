import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export function MenuTioArtesano({ dataProducts, img }) {
  return (
    <View>
      <Text style={styles.styleTextCategory}>Comida</Text>
      <ScrollView horizontal style={styles}>
        {dataProducts.map((products, index) => {
          if (products.categoria == "Comida") {
            // console.log(products.nombre);
            return (
              <View key={index} style={styles.StyleContedScrollView}>
                <TouchableOpacity
                  onPress={() => {
                    onPress(products);
                  }}
                >
                  <Image style={styles.styleImg} source={img[0]} />

                  <Text style={styles.styleDescriptions}>
                    {products.nombre}
                  </Text>

                  <Text style={styles.styleTextPrice}>
                    $ {products.precio} MXN
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }
        })}
      </ScrollView>

      <Text style={styles.styleTextCategory}>Resfresco</Text>
      <ScrollView horizontal style={styles}>
        {dataProducts.map((products, index) => {
          if (products.categoria == "Bebida") {
            // console.log(products.nombre);
            return (
              <View key={index} style={styles.StyleContedScrollView}>
                <TouchableOpacity
                  onPress={() => {
                    onPress(products);
                  }}
                >
                  <Image style={styles.styleImg} source={img[1]} />

                  <Text style={styles.styleDescriptions}>
                    {products.nombre}
                  </Text>

                  <Text style={styles.styleTextPrice}>
                    $ {products.precio} MXN
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contend: {
    // backgroundColor:'#d1d1d1',
    width: "100%",
    height: "100%",
    // backgroundColor:'#d1d1d1',
  },
  StyleContedScrollView: {
    width: 120,
    height: "100%",
    marginLeft: 10,
    // textAlign:'center',
    // alignContent:'center',
    // backgroundColor:'#d1d1d1',
  },
  styleImg: {
    // backgroundColor:'#d1d1d1',
    // width: 120,
    width: "100%",
    height: 100,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // backgroundColor:'#d1d1d1',
  },
  styleDescriptions: {
    // backgroundColor:'#d1d1d1',
    textAlign: "center",
  },
  styleTextPrice: {
    // backgroundColor:'#d1d1d1',
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  styleTextCategory: {
    fontSize: 20,
    margin: 10,
    marginTop: 15,
  },
});
