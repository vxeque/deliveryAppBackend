import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const verifyAccess = {
  _verifyaccess:false, // default false
  get: function Getaccess(){
    return this._verifyAccess 
  },
  set: function Setaccess(value){
    if (value == true) {
      this._verifyaccess = value
    }
  }
}

export default function AppStart() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Delivery+</Text>

      <TextInput style={styles.InputUser} placeholder="Usuario"></TextInput>
      <TextInput style={styles.InputUser} placeholder="Contraseña" secureTextEntry={true}></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("restaurant")}
        // onPress={() => {verifyAccess._verifyaccess = true; console.log(verifyAccess._verifyaccess)}}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.ButtonNewUser]}
        // onPress={() => navigation.navigate("restaurant")} // cambiar el navegador a el nombre del la otra pantalla
      >
        <Text style={[styles.buttonText]}>Crear cuenta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    marginTop:350,
    fontSize: 20,
    color: "black",
    marginBottom: 100,
  },
  button: {
    marginTop: 30,
    marginBottom: -15,
    backgroundColor: "#202020",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "white",
    // backgroundColor:'#505050',
  },
  ButtonNewUser:{
    backgroundColor:'#009c00'
  },
  InputUser: {
    height: 35,
    width: 150,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    // backgroundColor: "#ffff",
    backgroundColor: "#D1D1D1",
  },
});
