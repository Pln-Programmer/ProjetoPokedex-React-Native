import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 85,

      backgroundColor: colors.background,

      justifyContent: "center",
      alignItems: "center",

      position: "relative",

      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    titulo: {
      color: colors.text,

      fontSize: 30,
      fontWeight: "bold",

      letterSpacing: 0.5,
    },

    botaoEsquerda: {
      position: "absolute",
      left: 18,

      height: "100%",
      justifyContent: "center",
    },

    botaoDireita: {
      position: "absolute",
      right: 18,

      backgroundColor: colors.card,

      borderWidth: 1,
      borderColor: colors.border,

      paddingHorizontal: 14,
      paddingVertical: 8,

      borderRadius: 12,
    },

    sair: {
      color: colors.accent,

      fontWeight: "bold",
      fontSize: 13,
    },
  });