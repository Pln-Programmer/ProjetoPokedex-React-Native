import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: colors.background,

      paddingHorizontal: 20,
      paddingBottom: 30,
    },

    header: {
      backgroundColor: colors.background,

      paddingTop: 20,
      paddingHorizontal: 20,
    },

    containerCards: {
      width: "100%",

      gap: 18,

      marginTop: 20,
    },

    card: {
      width: "100%",

      borderRadius: 24,

      overflow: "hidden",

      borderWidth: 1,
      borderColor: colors.border,

      shadowColor: "#00BFFF",

      shadowOffset: {
        width: 0,
        height: 4,
      },

      shadowOpacity: 0.15,
      shadowRadius: 10,

      elevation: 5,
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