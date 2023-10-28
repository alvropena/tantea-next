import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductItem({ product, navigation }) {
  const displayName =
    product.name.length > 12
      ? product.name.substring(0, 12) + "..."
      : product.name;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("OrderDetails", { product })}
    >
      <View style={styles.product}>
        <Image source={product.imageUri} style={styles.productImage} />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{displayName}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginRight: 5 }}>{product.ratings}</Text>
            <Ionicons name="ios-star-sharp" size={15} color="#DD8B0D" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 5,
          }}
        >
          <Text>{product.delivery}</Text>
          <Text style={{ color: "#C70909", fontSize: 14 }}>
            ${product.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  productSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 10,
  },
  product: {    
    marginRight: 10,    
    width: 200,
    height: 100,    
  },
  productImage: {
    flex: 1,    
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },
};
