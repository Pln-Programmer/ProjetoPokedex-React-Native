import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
Lista: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  backgroundColor: "rgba(239, 108, 0, 0.30)",
  padding: 10,
  borderBottomEndRadius: 15,
  gap: 10,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},

  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10
  }
})

export default styles