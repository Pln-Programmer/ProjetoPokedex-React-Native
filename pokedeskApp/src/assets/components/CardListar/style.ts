import { StyleSheet } from "react-native";

export default StyleSheet.create({
  favorito: {
    position: "absolute",
    top: 14,
    right: 14,
    zIndex: 1,
  },

  card: {
    borderRadius: 28,
    marginVertical: 14,
    overflow: "hidden",
    width: "90%",
    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 28,
  },

  image: {
    width: 170,
    height: 170,
    resizeMode: "contain",
  },

  info: {
    padding: 18,
    alignItems: "center",
  },

  number: {
    fontSize: 13,
    fontWeight: "600",
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  types: {
    flexDirection: "row",
    width: "100%",
    marginTop: 12,
    gap: 10,
  },

  badge: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});