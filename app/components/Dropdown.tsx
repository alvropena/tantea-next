import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Option from "./Option";
import { AntDesign } from "@expo/vector-icons";

export default function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View
      style={{
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#D0D0D0",
      }}
    >
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={{ fontSize: 18, fontWeight: "500", marginVertical: 10 }}>
          {title}
        </Text>
        <AntDesign name={isOpen ? "up" : "down"} size={16} color="black" />
      </TouchableOpacity>

      {isOpen &&
        options.map((option, idx) => (
          <Option
            key={idx}
            label={option}
            selected={option === selectedOption}
            onSelect={() => setSelectedOption(option)}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
