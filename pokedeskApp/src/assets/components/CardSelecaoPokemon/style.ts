import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    gap: 5
  },

  imagem: {
    width: 280,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;