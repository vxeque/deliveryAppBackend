import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CheckBox, Icon } from "react-native-elements";

export function MethodPay() {
  const img = require("./img/visaCard.jpg");
  const imgMasterCard = require("./img/MasterCard_Logo.png");
  const imgEfectivo = require("./img/efectivo.png");
  return (
    <View style={style.styleContedMain}>
      <View style={style.styleContedSecundary}>
        <Text style={style.styleTextDelivery}>Delivery+</Text>
        <View style={style.styleContedTercero}>
          <View style={[style.styleContedVisa]}>
            <View>
              <Text style={style.styleTextVisa}>Visa {"(1010)"}</Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>Limite de pago $300.00 MXN</Text>
                <CheckBox
                  checkedIcon={<Icon name="dot-circle-o" type="font-awesome" />}
                  uncheckedIcon={<Icon name="circle-o" type="font-awesome" />}
                />
              </View>
            </View>
          </View>
          <View style={style.styleContedCard}>
            <Text style={style.styleTextCard}>Agregar Tarjeta</Text>
            <View style={style.styleContedImg}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image source={img} style={style.styleImg} />
                <Image
                  source={imgMasterCard}
                  style={style.styleImgMasterCard}
                />
              </View>
              <View>
                <CheckBox
                  checkedIcon={<Icon name="dot-circle-o" type="font-awesome" />}
                  uncheckedIcon={<Icon name="circle-o" type="font-awesome" />}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={style.styleContedEfective}>
        <Image source={imgEfectivo} style={style.styleImgEfectivo} />
        <View>
          <Text style={style.styleTextEfective}>Efectivo</Text>
          <Text>Limite de pago de $100.00 MXN</Text>
        </View>
        <CheckBox
          checkedIcon={<Icon name="dot-circle-o" type="font-awesome" />}
          uncheckedIcon={<Icon name="circle-o" type="font-awesome" />}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  styleContedMain: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  styleContedSecundary: {
    backgroundColor: "#e2e2e2",
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  styleContedTercero: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    // marginBottom:30
  },
  styleTextDelivery: {
    marginBottom: 10,
    fontSize: 25,
  },
  styleTextVisa: {
    fontSize: 20,
  },
  styleContedVisa: {
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    marginBottom: 20,
    paddingBottom: 20,
    // alignItems:'center',
    justifyContent: "space-between",
  },
  styleContedCard: {
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    marginBottom: 50,
    paddingBottom: 20,
  },
  styleTextCard: {
    fontSize: 15,
  },
  styleImg: {
    width: 30,
    height: 30,
  },
  styleImgMasterCard: {
    width: 40,
    height: 23,
    resizeMode: "contain",
  },
  styleContedImg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  styleContedEfective: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    margin: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  styleImgEfectivo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  styleTextEfective: {
    fontWeight: "bold",
  },
});
