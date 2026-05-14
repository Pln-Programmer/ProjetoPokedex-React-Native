import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "#000",
    
    justifyContent: "center",
    alignItems: "center",

    position: "relative",
  },

  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  botaoEsquerda: {
    position: "absolute",
    left: 15,

    height: "100%",
    justifyContent: "center",
  },

  botaoDireita: {
    position: "absolute",
    right: 15,

    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
  },

  sair: {
    fontWeight: "bold",
  },
});