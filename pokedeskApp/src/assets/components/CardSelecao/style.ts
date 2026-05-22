import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,

    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 28,
    paddingHorizontal: 20,

    gap: 10,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",

    shadowColor: "#00BFFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 5,
  },

  imagem: {
    width: 180,
    height: 90,

    resizeMode: "contain",

    marginBottom: 8,
  },

  titulo: {
    color: "#FFFFFF",

    fontSize: 26,
    fontWeight: "bold",

    textAlign: "center",

    letterSpacing: 0.5,
  },
});

export default styles;