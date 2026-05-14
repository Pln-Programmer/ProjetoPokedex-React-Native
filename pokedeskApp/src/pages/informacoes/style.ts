import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  botaoVoltar: {
    marginRight: 15,
  },

  nomePokemon: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    textTransform: "capitalize",
  },

  numeroPokemon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    opacity: 0.8,
  },

  containerImagem: {
    alignItems: "center",
    zIndex: 10,
    marginBottom: -40,
  },

  imagemPokemon: {
    width: 220,
    height: 220,
  },

  folhaBranca: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  containerTipos: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 25,
  },

  tipoBadge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },

  tipoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  containerSobre: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },

  itemSobre: {
    flex: 1,
    alignItems: "center",
  },

  valorSobre: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  labelSobre: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },

  divisor: {
    width: 1,
    height: 50,
    backgroundColor: "#DDD",
  },

  containerStats: {
    flexDirection: "row",
    width: "100%",
  },

  labelsStats: {
    width: 90,
    alignItems: "flex-end",
    marginRight: 10,
  },

  textoLabelStat: {
    height: 25,
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  divisorVertical: {
    width: 1,
    backgroundColor: "#DDD",
    marginRight: 10,
  },

  valoresStats: {
    width: 40,
    marginRight: 10,
  },

  textoValorStat: {
    height: 25,
    fontSize: 13,
    color: "#333",
  },

  containerProgresso: {
    flex: 1,
    justifyContent: "space-between",
  },

  fundoProgresso: {
    height: 6,
    backgroundColor: "#EEE",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 9,
  },

  barraProgresso: {
    height: 6,
    borderRadius: 10,
  },

  audios: {
    marginTop: 25,
    gap: 20,
  },

  botaoAudio: {
    width: "100%",
    height: 70,

    borderWidth: 2,

    borderRadius: 28,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.35,
    shadowRadius: 8,

    elevation: 10,

    position: "relative",

    overflow: "hidden",
  },

  containerIconeAudio: {
    width: 56,
    height: 56,

    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.8,
    shadowRadius: 10,

    elevation: 8,
  },

  infoAudio: {
    flex: 1,
    marginLeft: 18,
  },

  audioTitulo: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },

  audioSubtitulo: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: "600",
  },

  audioOndas: {
    width: 110,
    height: 125,

    resizeMode: "contain",

    opacity: 0.95,
  },
});

export default styles;