import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MenuComponents } from "./MenuComponents";

export function Saurcers({ img, dataProducts, idRestaurant }) {
  // const [category, setCategory] = useState([]);
  let restaurant = '';
  let category = []; 
  
  // useEffect(() => {
  //   // setCategory([]); // Asigna un array vacío para borrar todos los elementos
  // }, []);
  
  // category = []; 
  
  if (idRestaurant != restaurant) {
    
    dataProducts.map((product) => {
      const exist = category.some((item) => item == product.categoria);
      if (!exist) {
        // category.push(product.categoria); 
        if (product.categoria != 'Bebida') {
          category.unshift(product.categoria); 
        }
        // setCategory([...category, product.categoria]);
      }
    });
  }
  // console.log(idRestaurant, ' = ', category)

  const navigation = useNavigation();

  const params = {
    Img: "data",
    dataProducts: "ho",
  };

  function onPress(dataProdut) {
    const params = {
      Imgs: img[0],
      dataProducts: dataProdut,
    };
    navigation.navigate("descriptionProduct", params);
    // navigation.navigate("descriptionProduct", {img, dataProducts});
  }

  return (
    <ScrollView style={styles.contend}>
      {category.map((nameCategory, index)=> (
        <MenuComponents key={index}
          dataProducts={dataProducts}
          img={img}
          nameCategory={nameCategory}
        ></MenuComponents>
      ))}

      {/* {category.map()} */}
    </ScrollView>
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
