import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screenn
import { Restaurant } from "./Restaurant";
import AppStart from "./index";
import { RestaurantMenu } from "./RestaurantMenu";
import { DescriptionsProducts } from "./DescriptionsProducts";
import { ShoppingCart } from "./shoppingCart";
import { SendOrder } from "./SendOrder";
import { DataClientSend } from "./components/sendOrderFolder/DataClient";
import { Help } from "./Help";
import { HelpComponent } from "./components/HelpComponent";
import { MethodPay } from "./MethodPay";
import { verifyAccess } from "./index";
import { TrackingOrder } from "./trackingOrder";

const Stack = createNativeStackNavigator();
const TabWithoutBar = createBottomTabNavigator();

function logIn(){
  return(

    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  )
}

function MyStack(params) {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={AppStart}
        options={{ headerShown: false, tabBarVisible: false }}
      />

      {/* desde aqui empieza */}
      
      <Tab.Screen
        name="restaurant"
        component={Restaurant}
        options={{
          title: "Restaurant",
        }}
      />

      <Tab.Screen
        name="Menu"
        component={RestaurantMenu}
        options={{ title: "Menu", tabBarVisible: false }}
      />

      <Tab.Screen
        name="descriptionProduct"
        component={DescriptionsProducts}
        options={{ title: "Description product", tabBarVisible: false }}
      />

      <Tab.Screen
        name="shoppingCart"
        component={ShoppingCart}
        options={{ title: "shoppingCart", tabBarVisible: false }}
      />

      <Stack.Screen
        name="sendOrder"
        component={SendOrder}
        options={{ title: "Enviar pedido", tabBarVisible: false }}
      />

      <Stack.Screen name="dataClientSend" component={DataClientSend} />

      <Stack.Screen
        name="methodPay"
        component={MethodPay}
        options={({ route }) => ({
          tabBarLabel: () => null, // Esto oculta el título
          tabBarIcon: ({ focused, color, size }) => {
            null;
          }, // Esto oculta el ícono
        })}
      />

      <Tab.Screen
        name="trackingOrder"
        component={TrackingOrder}
        options={{ title: "Seguir pedido", tabBarStyle: { display: "none" } }}
      />

      {/* aqui termina */}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs(params) {
  return (
    <Tab.Navigator initialRouteName="restaurant">
      {/* <Tab.Navigator> */}
      <Tab.Screen
        name="start"
        component={MyStack}
        // options={{ headerShown: false, tabBarVisible: false }}
        options={{ headerShown: false }}
      />

      {/* <Tab.Screen name="start" component={AppStart} options={{headerShown:false, TabBarVisible:false}}/> */}

      {/* </Tab.Screen> */}

      {/* <Tab.Screen
        name="restaurant"
        component={Restaurant}
        options={{
          title: "Restaurant",
        }}
      /> */}

      <Tab.Screen name="help" component={Help} options={{ title: "Ayuda" }} />

      <Tab.Screen
        name="helpcomponentayuda"
        component={HelpComponent}
        options={{ title: "Preguntas frecuentes" }}
      />

      {/* <Tab.Screen
        name="Menu"
        component={RestaurantMenu}
        options={{ title: "Menu", tabBarVisible: false }}
      />

      <Tab.Screen
        name="descriptionProduct"
        component={DescriptionsProducts}
        options={{ title: "Description product", tabBarVisible: false }}
      />
      <Tab.Screen
        name="shoppingCart"
        component={ShoppingCart}
        options={{ title: "shoppingCart", tabBarVisible: false }}
      /> */}

      {/* <Tab.Screen
        name="sendOrder"
        component={SendOrder}
        options={{ title: "Enviar pedido", tabBarVisible: false }}
      />

      <Tab.Screen name="dataClientSend" component={DataClientSend} />

      <Tab.Screen
        name="methodPay"
        component={MethodPay}
        options={({ route }) => ({
          tabBarLabel: () => null, // Esto oculta el título
          tabBarIcon: ({ focused, color, size }) => {null}, // Esto oculta el ícono
        })}
      />

      <Tab.Screen
        name="trackingOrder"
        component={TrackingOrder}
        options={{ title: "Seguir pedido", tabBarStyle: { display: "none" } }}
      /> */}
    </Tab.Navigator>
  );
}

export default function Navigator() {
  // const isAuthenticated = false;
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? <MyTabs /> : <MyStack />} */}
      {/* {verifyAccess._verifyaccess ? <MyTabs /> : <MyStack />} */}
      {/* {verifyAccess._verifyaccess ? <MyStack /> : <MyTabs />} */}
      {/* <MyStack /> */}
      <MyTabs />
    </NavigationContainer>
  );
}
