import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    containerScreen: {
      flex: 1,
    },

    Lista: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",

      backgroundColor: colors.card,

      padding: 14,

      gap: 10,

      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    containerCards: {
      alignItems: "center",

      backgroundColor: colors.background,

      paddingVertical: 14,

      flexGrow: 1,
    },

    Botoes: {
      flexDirection: "row",

      justifyContent: "space-between",
      alignItems: "center",

      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 35,

      gap: 10,

      backgroundColor: colors.background,
    },

    botaoSomar: {
      flex: 1,

      backgroundColor: "#00BFFF",

      paddingVertical: 14,

      borderRadius: 16,

      alignItems: "center",
      justifyContent: "center",
    },

    botaoDiminuir: {
      flex: 1,

      backgroundColor: colors.card,

      borderWidth: 1,
      borderColor: colors.border,

      paddingVertical: 14,

      borderRadius: 16,

      alignItems: "center",
      justifyContent: "center",
    },

    textoBotao: {
      color: colors.text,

      fontSize: 15,
      fontWeight: "bold",

      letterSpacing: 0.3,
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

      elevation: 8,
    },
  });