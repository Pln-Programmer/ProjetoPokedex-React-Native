import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#0B1020",
  },

  scroll: {
    backgroundColor: "#0B1020",
  },

  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    backgroundColor: "#11182D",

    padding: 12,
    gap: 10,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,191,255,0.08)",
  },

  container: {
    alignItems: "center",
    backgroundColor: "#0B1020",
    paddingVertical: 14,
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingVertical: 20,

    gap: 10,
    backgroundColor: "#0B1020",
  },

  botaoPrimario: {
    flex: 1,
    backgroundColor: "#00BFFF",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
  },

  botaoSecundario: {
    flex: 1,
    backgroundColor: "#1A2440",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,191,255,0.15)",
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});