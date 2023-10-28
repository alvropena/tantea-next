import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

export default function LocationModal({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Elige tu locación</Text>

          {[
            "Universidad del Pacífico",
            "Universidad de Lima",
            "Universidad Peruana de Ciencias Aplicadas",
          ].map((uni) => (
            <TouchableOpacity
              key={uni}
              style={styles.modalButton}
              onPress={() => {
                /* Handle university selection here, if needed */
              }}
            >
              <Text style={{ textAlign: "center" }}>{uni}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalButton: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  },
  continueButton: {
    backgroundColor: "#DD8B0D",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  continueButtonText: {
    color: "white",
    textAlign: "center",
  },
});
