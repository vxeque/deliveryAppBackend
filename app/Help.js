import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Help() {
  const helpJson = require("./help.json");
  const navigation = useNavigation();

  function onClick(params) {
    navigation.navigate("helpcomponentayuda");
  }

  return (
    <View style={style.styleContendMain}>
      {helpJson.map((helpitem, index) => (
        <View key={index} style={style.styleConted}>
          <TouchableOpacity
            style={style.styleTextCenter}
            onPress={(data) => onClick(data)}
          >
            <Text style={style.styleFont}>{helpitem.title}</Text>
            <Text style={style.styleFont}>{">"}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  styleContendMain: { backgroundColor: "white", height: "100%" },
  styleConted: {
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: -1,
  },
  styleFont: {
    fontSize: 15,
  },
  styleTextCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
});
