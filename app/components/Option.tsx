import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Option({ label, selected, onSelect }) {
  return (
    <TouchableOpacity style={styles.option} onPress={onSelect}>
      {selected ? (
        <MaterialCommunityIcons
          name="radiobox-marked"
          size={24}
          color="black"
        />
      ) : (
        <MaterialCommunityIcons name="radiobox-blank" size={24} color="black" />
      )}
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionText: {
    marginLeft: 5
  }
})