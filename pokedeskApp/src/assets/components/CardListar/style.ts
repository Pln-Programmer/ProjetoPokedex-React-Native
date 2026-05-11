import { StyleSheet } from "react-native";

export default StyleSheet.create({
  favorito: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },

  card: {
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    marginVertical: 20,
    overflow: "hidden",
    elevation: 6,
    width: "90%",

  },

  imageContainer: {
    backgroundColor: "#3A3A3A",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  info: {
    padding: 18,
    alignItems: "center",
  },

  number: {
    color: "#aaa",
    fontSize: 13,
  },

  name: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },

  types: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    gap: 10,
  },

  badge: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

});
