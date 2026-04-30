import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  input: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#0F172A",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    marginBottom: 15,
    backgroundColor: "#F8FAFC",
  },

  botao: {
    width: "100%",
    height: 50,
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  botaoTexto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#F1F5F9",
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "stretch",
    gap: 15,
  },

  imagem: {
    width: 110,
    height: 110,
  },

  info: {
    flex: 1,
    justifyContent: "space-between",
  },

  numero: {
    fontSize: 14,
    color: "#94A3B8",
    fontWeight: "bold",
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 10
  },

  tiposContainer: {
    flex: 1,
    justifyContent: "flex-end",
    gap: 8,
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
    fontSize: 13,
  },

});

export default styles;