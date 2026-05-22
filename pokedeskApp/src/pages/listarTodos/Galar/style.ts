import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    backgroundColor: "#11182D",

    padding: 14,

    gap: 10,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,191,255,0.10)",
  },

  container: {
    alignItems: "center",

    backgroundColor: "#0B1020",

    paddingVertical: 14,

    flexGrow: 1,
  },

  Botoes: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 35,

    gap: 10,

    backgroundColor: "#0B1020",
  },

  botaoSomar: {
    flex: 1,

    backgroundColor: "#00BFFF",

    paddingVertical: 14,

    borderRadius: 16,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#00BFFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 5,
  },

  botaoDiminuir: {
    flex: 1,

    backgroundColor: "#1A2440",

    borderWidth: 1,
    borderColor: "rgba(0,191,255,0.15)",

    paddingVertical: 14,

    borderRadius: 16,

    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#FFFFFF",

    fontSize: 15,
    fontWeight: "bold",

    letterSpacing: 0.3,
  },
});

export default styles;