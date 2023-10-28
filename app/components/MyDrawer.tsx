import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native";
import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";

export default function MyDrawer(props) {
  const profilePicture = "https://via.placeholder.com/150";
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        <Image source={{ uri: profilePicture }} style={styles.profileImage} />
        <Text style={{ marginBottom: 5, fontSize: 16 }}>
          Mathias Minchan Wolstrohn
        </Text>
        <Text>ab.cd@alum.up.edu.pe</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#D0D0D0",
          marginVertical: 20,
        }}
      ></View>
      <DrawerItem
        label="Inicio"
        onPress={() => {
          props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          );
        }}
        icon={() => (
          <Ionicons name="home" size={24} style={{ marginRight: -20 }} />
        )}
      />

      <DrawerItem
        label="Perfil"
        onPress={() => props.navigation.navigate("Mi cuenta")}
        icon={() => (
          <Ionicons
            name="person"
            size={24}
            color="black"
            style={{ marginRight: -20 }}
          />
        )}
      />
      <DrawerItem
        label="Historial de pedidos"
        onPress={() => props.navigation.navigate("Historial de pedidos")}
        icon={() => (
          <Octicons
            name="history"
            size={24}
            color="black"
            style={{ marginRight: -20 }}
          />
        )}
      />
      <DrawerItem
        label="Ayuda"
        onPress={() => props.navigation.navigate("Ayuda")}
        icon={() => (
          <AntDesign
            name="customerservice"
            size={24}
            color="black"
            style={{ marginRight: -20 }}
          />
        )}
      />

      {/* Bottom Sign In Text */}
      <TouchableOpacity style={styles.footer}>
        <Ionicons name="enter-outline" size={24} color="black" />
        <Text style={styles.signInText}>Regístrate o inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    fontSize: 50,
    fontWeight: "bold",
  },
  promptText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  signInText: {
    marginLeft: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginVertical: 10,
  },
});
