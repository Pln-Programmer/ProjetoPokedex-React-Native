import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      gap: 20,
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 30,
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