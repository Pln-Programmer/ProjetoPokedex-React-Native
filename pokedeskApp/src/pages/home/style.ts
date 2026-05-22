import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  header: {
    backgroundColor: "#0B1020",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  containerCards: {
    width: "100%",
    gap: 18,
    marginTop: 20,
  },

  card: {
    width: "100%",

    borderRadius: 24,
    overflow: "hidden",

    borderWidth: 1,
    borderColor: "rgba(0,191,255,0.15)",

    shadowColor: "#00BFFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 5,
  },
});

export default styles;