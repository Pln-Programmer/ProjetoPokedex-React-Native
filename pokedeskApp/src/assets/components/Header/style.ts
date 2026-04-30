import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "#1E1E1E",

    flexDirection: "row",
    alignItems: "center",

    borderBottomWidth: 2,
    borderBottomColor: "#333",
    paddingHorizontal: 15,
  },

  lado: {
    width: 60,
  },

  centro: {
    flex: 1,
    alignItems: "center",
  },

  titulo: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },

});

export default styles;