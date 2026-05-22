import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 85,

    backgroundColor: "#0B1020",

    justifyContent: "center",
    alignItems: "center",

    position: "relative",

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,191,255,0.12)",
  },

  titulo: {
    color: "#FFFFFF",

    fontSize: 30,
    fontWeight: "bold",

    letterSpacing: 0.5,
  },

  botaoEsquerda: {
    position: "absolute",
    left: 18,

    height: "100%",
    justifyContent: "center",
  },

  botaoDireita: {
    position: "absolute",
    right: 18,

    backgroundColor: "#11182D",

    borderWidth: 1,
    borderColor: "rgba(0,191,255,0.18)",

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: 12,
  },

  sair: {
    color: "#00BFFF",

    fontWeight: "bold",
    fontSize: 13,
  },
});