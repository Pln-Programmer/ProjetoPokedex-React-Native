import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,

    backgroundColor: "#0B1020",
  },

  containerLoading: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#0B1020",
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 22,

    marginBottom: 10,
  },

  botaoVoltar: {
    width: 48,
    height: 48,

    borderRadius: 16,

    backgroundColor: "rgba(255,255,255,0.12)",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 16,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  nomePokemon: {
    fontSize: 34,
    fontWeight: "bold",

    color: "#FFF",

    textTransform: "capitalize",

    letterSpacing: 0.5,
  },

  numeroPokemon: {
    fontSize: 16,
    fontWeight: "700",

    color: "#FFF",

    opacity: 0.7,

    marginTop: 2,
  },

  containerImagem: {
    alignItems: "center",

    zIndex: 10,

    marginBottom: -55,

    marginTop: 10,
  },

  imagemPokemon: {
    width: 240,
    height: 240,

    resizeMode: "contain",
  },

  folhaBranca: {
    flex: 1,

    backgroundColor: "#11182D",

    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,

    paddingTop: 85,
    paddingHorizontal: 22,
    paddingBottom: 40,

    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  containerTipos: {
    flexDirection: "row",

    justifyContent: "center",

    gap: 10,

    marginBottom: 28,
  },

  tipoBadge: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    borderRadius: 999,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 4,
  },

  tipoTexto: {
    color: "#FFF",

    fontWeight: "bold",

    fontSize: 13,

    letterSpacing: 0.5,
  },

  tituloSecao: {
    fontSize: 21,
    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 22,

    letterSpacing: 0.3,
  },

  containerSobre: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#0B1020",

    borderRadius: 24,

    paddingVertical: 20,
    paddingHorizontal: 10,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
  },

  itemSobre: {
    flex: 1,

    alignItems: "center",
  },

habilidade: {
  width: '45%',
  padding: 10,

  backgroundColor: "#0B1020",

  alignItems: "center",

  alignSelf: "center",

borderBottomLeftRadius: 16,
borderBottomRightRadius: 16,

  marginBottom: 30,
},

  valorSobre: {
    fontSize: 15,
    fontWeight: "700",

    color: "#FFFFFF",

    textAlign: "center",
  },

  labelSobre: {
    fontSize: 12,

    color: "#8FA3C7",

    marginTop: 8,

    fontWeight: "600",
  },

  divisor: {
    width: 1,
    height: 50,

    backgroundColor: "rgba(255,255,255,0.08)",
  },

    divisorTop: {
    width: 90,
    height: 1,
    marginTop: -12,
    marginBottom: 12,

    backgroundColor: "rgba(255,255,255,0.08)",
  },

  containerStats: {
    flexDirection: "row",

    width: "100%",

    backgroundColor: "#0B1020",

    borderRadius: 24,

    padding: 18,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },

  labelsStats: {
    width: 90,

    alignItems: "flex-end",

    marginRight: 10,
  },

  textoLabelStat: {
    height: 28,

    fontSize: 13,

    fontWeight: "bold",

    textTransform: "capitalize",
  },

  divisorVertical: {
    width: 1,

    backgroundColor: "rgba(255,255,255,0.08)",

    marginRight: 10,
  },

  valoresStats: {
    width: 42,

    marginRight: 10,
  },

  textoValorStat: {
    height: 28,

    fontSize: 13,

    color: "#FFFFFF",

    fontWeight: "600",
  },

  containerProgresso: {
    flex: 1,

    justifyContent: "space-between",
  },

  fundoProgresso: {
    height: 8,

    backgroundColor: "rgba(255,255,255,0.08)",

    borderRadius: 999,

    overflow: "hidden",

    marginVertical: 10,
  },

  barraProgresso: {
    height: 8,

    borderRadius: 999,
  },

  audios: {
    marginTop: 28,

    gap: 18,
  },

  botaoAudio: {
    width: "100%",
    minHeight: 82,

    borderWidth: 1.5,

    borderRadius: 28,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 16,

    backgroundColor: "#0B1020",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.18,
    shadowRadius: 8,

    elevation: 5,

    overflow: "hidden",
  },

  containerIconeAudio: {
    width: 58,
    height: 58,

    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.45,
    shadowRadius: 10,

    elevation: 5,
  },

  infoAudio: {
    flex: 1,

    marginLeft: 16,
  },

  audioTitulo: {
    color: "#FFFFFF",

    fontSize: 17,

    fontWeight: "700",
  },

  audioSubtitulo: {
    fontSize: 13,

    marginTop: 4,

    fontWeight: "600",
  },

  audioOndas: {
    width: 90,
    height: 90,

    resizeMode: "contain",

    opacity: 0.12,

    position: "absolute",

    right: -10,
  },

  headerFixa: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,

    zIndex: 999,

    height: 90,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    paddingTop: 5,
    paddingHorizontal: 22,

    flexDirection: "row",
    alignItems: "center",

  },

  nomeHeaderFixa: {
    position: "absolute",

    bottom: 22,

    left: 0,
    right: 0,

    textAlign: "center",

    color: "#FFF",

    fontSize: 34,
    fontWeight: "bold",

    textTransform: "capitalize",

    letterSpacing: 0.5,
    pointerEvents: "none",
  },
  avisoShiny: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'rgb(76, 76, 76)',
    textAlign: "center",
    marginTop: -35,
    marginBottom: 20,
  },

containerEvolucoes: {
  marginTop: 35,

  backgroundColor: "#0B1020",

  borderRadius: 28,

  padding: 18,

  borderWidth: 1,

  borderColor: "rgba(255,255,255,0.05)",
},

cardEvolucao: {
  width: "100%",

  backgroundColor: "#11182D",

  borderRadius: 28,

  alignItems: "center",

  paddingVertical: 22,

  borderWidth: 1,

  borderColor: "rgba(255,255,255,0.08)",

  shadowColor: "#000",

  shadowOffset: {
    width: 0,
    height: 4,
  },

  shadowOpacity: 0.25,

  shadowRadius: 8,

  elevation: 8,
},

imagemEvolucao: {
  width: 140,
  height: 140,

  resizeMode: "contain",
},

nomeEvolucao: {
  color: "#FFF",

  fontSize: 22,

  fontWeight: "bold",

  marginTop: 10,

  textTransform: "capitalize",
},

idEvolucao: {
  color: "#8FA3C7",

  marginTop: 4,

  fontSize: 14,

  fontWeight: "600",
},

containerMetodo: {
  alignItems: "center",

  marginVertical: 18,
},

linhaEvolucao: {
  width: 2,

  height: 28,

  backgroundColor: "rgba(255,255,255,0.15)",
},

metodoEvolucao: {
  marginTop: 8,

  backgroundColor: "#11182D",

  paddingHorizontal: 18,

  paddingVertical: 8,

  borderRadius: 999,

  fontSize: 12,

  fontWeight: "bold",

  letterSpacing: 1,

  textTransform: "uppercase",

  borderWidth: 1,

  borderColor: "rgba(255,255,255,0.08)",
},
});

export default styles;
