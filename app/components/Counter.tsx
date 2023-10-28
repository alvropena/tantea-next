import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.add}>
        <Ionicons name="remove-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ paddingHorizontal: 20, fontSize: 20 }}>{count}</Text>
      <TouchableOpacity onPress={increment} style={styles.add}>
        <Ionicons name="add-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#D0D0D0",
  },
  add: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
