import React from "react";  
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./app/redux/configureStore";

import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/HomeScreen";
import AboutScreen from "./app/screens/AboutScreen";



const Stack = createStackNavigator();
const store =
createStore(
reducers,
applyMiddleware(thunk)
)

export default function App() {
  return (
    <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="HomeScreen" options={{  headerShown: false  }} component={HomeScreen} />
          <Stack.Screen name="AboutScreen" options={{  headerShown: false  }} component={AboutScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
}