import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#0B1020",
  },

  input: {
    width: "100%",
    height: 55,

    borderRadius: 16,

    paddingHorizontal: 18,

    fontSize: 15,

    color: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#243251",

    marginBottom: 15,

    backgroundColor: "#11182D",
  },

  botao: {
    width: "100%",
    height: 55,

    backgroundColor: "#00BFFF",

    borderRadius: 16,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 24,
  },

  botaoTexto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",

    backgroundColor: "#11182D",

    padding: 18,

    borderRadius: 24,

    borderWidth: 1,
    borderColor: "rgba(0,191,255,0.12)",

    alignItems: "center",

    gap: 15,

    shadowColor: "#00BFFF",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 5,
  },

  imagem: {
    width: 120,
    height: 120,

    resizeMode: "contain",
  },

  info: {
    flex: 1,
    justifyContent: "space-between",
  },

  numero: {
    fontSize: 13,
    color: "#8FA3C7",
    fontWeight: "bold",
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",

    marginVertical: 6,

    letterSpacing: 0.5,
  },

  tiposContainer: {
    gap: 8,
    marginTop: 8,
  },

  tipo: {
    width: "100%",

    paddingVertical: 8,

    borderRadius: 10,

    alignItems: "center",
  },

  tipoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,

    letterSpacing: 0.5,
  },
});

export default styles;