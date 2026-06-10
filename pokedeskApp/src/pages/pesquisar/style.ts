import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: colors.background,
    },

    input: {
      width: "100%",
      minHeight: 55,

      backgroundColor: colors.card,

      borderWidth: 2,
      borderColor: colors.border,

      borderRadius: 16,

      paddingHorizontal: 16,

      color: colors.text,
      fontSize: 15,

      marginBottom: 15,

      overflow: "hidden",
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

      marginBottom: 12,

      elevation: 5,

      overflow: "hidden",
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