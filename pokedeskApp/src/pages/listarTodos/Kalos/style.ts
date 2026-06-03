import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#0B1020",
  },

  Lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#11182D",
    padding: 12,
    gap: 10,
  },

  container: {
    alignItems: "center",
    backgroundColor: "#0B1020",
    paddingVertical: 10,
  },

  Botoes: {
    flexDirection: "row",
    gap: 10,
    padding: 20,
    backgroundColor: "#0B1020",
  },

  botaoSomar: {
    flex: 1,
    backgroundColor: "#00BFFF",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  botaoDiminuir: {
    flex: 1,
    backgroundColor: "#1A2440",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});