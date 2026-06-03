import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    scroll: {
      flexGrow: 1,
      justifyContent: "center",
      padding: 24,
    },

    header: {
      alignItems: "center",
      marginBottom: 30,
    },

    image: {
      width: 250,
      height: 170,
      resizeMode: "contain",
    },

    card: {
      backgroundColor: colors.card,

      borderRadius: 24,
      padding: 22,

      borderWidth: 1,
      borderColor: colors.border,
    },

    title: {
      fontSize: 28,
      fontWeight: "bold",

      color: colors.text,
    },

    subtitle: {
      fontSize: 14,

      color: colors.secondaryText,

      marginTop: 4,
      marginBottom: 10,
    },

    form: {
      gap: 14,
    },

    inputGroup: {
      gap: 6,
    },

    label: {
      fontSize: 13,

      color: colors.secondaryText,

      fontWeight: "600",
    },

    input: {
      backgroundColor: colors.button,

      borderWidth: 1,
      borderColor: colors.border,

      borderRadius: 14,
      padding: 14,

      color: colors.text,

      fontSize: 15,
    },

    button: {
      backgroundColor: colors.accent,

      padding: 15,
      borderRadius: 14,

      alignItems: "center",

      marginTop: 8,
    },

    buttonText: {
      color: "#FFFFFF",

      fontSize: 16,
      fontWeight: "bold",
    },

    switchText: {
      textAlign: "center",

      marginTop: 12,

      color: colors.secondaryText,
    },

    link: {
      color: colors.accent,

      fontWeight: "bold",
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