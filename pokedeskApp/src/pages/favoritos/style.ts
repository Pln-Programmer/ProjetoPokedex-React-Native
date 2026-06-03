import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.background,
    },

    container: {
      alignItems: "center",

      backgroundColor: colors.background,

      paddingTop: 14,
      paddingBottom: 30,

      flexGrow: 1,
    },

    vazioContainer: {
      flex: 1,

      justifyContent: "center",
      alignItems: "center",

      paddingTop: 80,
    },

    vazioTitulo: {
      color: colors.text,

      fontSize: 22,
      fontWeight: "bold",

      marginTop: 18,
    },

    vazioTexto: {
      color: colors.secondaryText,

      fontSize: 15,

      marginTop: 8,

      textAlign: "center",

      paddingHorizontal: 40,

      lineHeight: 22,
    },

    loading: {
      marginTop: 40,
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