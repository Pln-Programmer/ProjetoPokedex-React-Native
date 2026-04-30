import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 25,
  },

  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    gap: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
  },

  form: {
    gap: 12,
  },

  inputGroup: {
    gap: 5,
  },

  label: {
    fontSize: 13,
    color: "#444",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#F9F9F9",
  },

  button: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  switchText: {
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },

  link: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  googleText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});

export default styles;
