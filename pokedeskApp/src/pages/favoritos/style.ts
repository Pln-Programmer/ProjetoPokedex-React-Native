import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0B1020",
  },

  container: {
    alignItems: "center",

    backgroundColor: "#0B1020",

    paddingTop: 14,
    paddingBottom: 30,

    flexGrow: 1,
  },

  vazioContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingTop: 80,
  },

  vazioTitulo: {
    color: "#FFFFFF",

    fontSize: 22,
    fontWeight: "bold",

    marginTop: 18,
  },

  vazioTexto: {
    color: "#8FA3C7",

    fontSize: 15,

    marginTop: 8,

    textAlign: "center",

    paddingHorizontal: 40,

    lineHeight: 22,
  },

  loading: {
    marginTop: 40,
  },
});

export default styles;