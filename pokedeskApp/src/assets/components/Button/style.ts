import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  googleButton: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  padding: 12,
  borderRadius: 10,
  marginTop: 10,
  borderWidth: 1,
  borderColor: "#ddd"
},

googleIcon: {
  width: 20,
  height: 20,
  marginRight: 10
},

googleText: {
  fontSize: 16,
  color: "#333",
  fontWeight: "bold"
}
});

export default styles;