import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function UserCarBuy(params) {
  const ImgUser = require("../img/user.png");
  const shoppingCart = require("../img/shoppingCart.png");
  const navigation = useNavigation();

  function onPress() {
    // navigation.navigate("ShoppingCart");
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {/* boton profile user */}
        <TouchableOpacity>
          <Image source={ImgUser} style={styles.ImgUser} />
        </TouchableOpacity>

        {/* espace */}
        <View style={styles.space}></View>

        {/* image shoppingcart */}
        <TouchableOpacity onPress={()=>onPress()}>
          <Image
            source={shoppingCart}
            style={[styles.ImgUser, styles.ImgshoppingCart]}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 10,
    // height:10,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  ImgUser: {
    width: 45,
    height: 45,
    borderRadius: 75,
    marginTop: "1%",
    // alignItems:"center",
    // marginRight:250
  },
  ImgshoppingCart: {
    // marginLeft:250,
    borderRadius: 0,
  },
  space: {
    width: "55%",
  },
});
