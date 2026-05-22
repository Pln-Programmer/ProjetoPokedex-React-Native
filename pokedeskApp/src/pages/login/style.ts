import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
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
    backgroundColor: "#11182D",
    borderRadius: 24,
    padding: 22,

    borderWidth: 1,
    borderColor: "rgba(0,191,255,0.15)",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 14,
    color: "#8FA3C7",
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
    color: "#B8C7E0",
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#1A2440",
    borderWidth: 1,
    borderColor: "#243251",

    borderRadius: 14,
    padding: 14,

    color: "#fff",
    fontSize: 15,
  },

  button: {
    backgroundColor: "#00BFFF",

    padding: 15,
    borderRadius: 14,

    alignItems: "center",

    marginTop: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  switchText: {
    textAlign: "center",
    marginTop: 12,
    color: "#8FA3C7",
  },

  link: {
    color: "#00BFFF",
    fontWeight: "bold",
  },
});

export default styles;