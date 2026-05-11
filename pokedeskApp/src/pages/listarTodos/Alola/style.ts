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
  },

  Botoes: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 15,
  marginBottom: 25,
  gap: 10,
},

botaoSomar: {
  flex: 1,
  backgroundColor: "#42A5F5",
  paddingVertical: 14,
  borderRadius: 15,
  alignItems: "center",
  justifyContent: "center",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},

botaoDiminuir: {
  flex: 1,
  backgroundColor: "#FF5252",
  paddingVertical: 14,
  borderRadius: 15,
  alignItems: "center",
  justifyContent: "center",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},

textoBotao: {
  color: "#FFF",
  fontSize: 15,
  fontWeight: "bold",
  letterSpacing: 0.5,
},
})

export default styles