import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: colors.background,
    },

    input: {
      width: "100%",
      height: 55,

      borderRadius: 16,

      paddingHorizontal: 18,

      fontSize: 15,

      color: colors.text,

      borderWidth: 1,
      borderColor: colors.border,

      marginBottom: 15,

      backgroundColor: colors.card,
    },

    botao: {
      width: "100%",
      height: 55,

      backgroundColor: colors.accent,

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

      backgroundColor: colors.card,

      padding: 18,

      borderRadius: 24,

      borderWidth: 1,
      borderColor: colors.border,

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

      marginBottom: 12,
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
      color: colors.secondaryText,
      fontWeight: "bold",
    },

    nome: {
      fontSize: 24,
      fontWeight: "bold",

      color: colors.text,

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

    trocaTemaButton: {
      position: "absolute",

      right: 25,
      bottom: 35,

      width: 60,
      height: 60,

      borderRadius: 999,

      justifyContent: "center",
      alignItems: "center",

      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 4,
      },

      shadowOpacity: 0.25,

      shadowRadius: 8,

      elevation: 8,
    },
  });