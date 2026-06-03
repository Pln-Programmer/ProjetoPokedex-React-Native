import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 14,
    gap: 10,
    borderBottomWidth: 1,
  },

  container: {
    alignItems: "center",
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
  },

  botaoSomar: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoDiminuir: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});