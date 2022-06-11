import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, Button, View } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={DetailsStackScreen} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Show me the Details screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        This is the Details page. Now you can drill down to a further details
        page in this Stack of screens
      </Text>

      <Button
        title="Further Details"
        onPress={() => navigation.navigate("Further Details")}
      />

      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Search page</Text>
      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function DetailsStackScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details Stack Screen" component={Details} />
      <Stack.Screen name="Further Details" component={FurtherDetails} />
    </Stack.Navigator>
  );
}

function FurtherDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the FURTHER Details page</Text>
      <Button
        title="Back to the previous Screen"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Back to the HOME Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
