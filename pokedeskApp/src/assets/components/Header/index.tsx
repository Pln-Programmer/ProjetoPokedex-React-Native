import { View, Text, TouchableOpacity } from "react-native";

import { createStyles } from "./style";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";

import { useTheme } from "../../../context/ThemeContext";

export default function Header({ titulo, voltar }) {
  const navigator = useNavigation();

  const { signOut } = useAuth();

  const { colors } = useTheme();

  const styles = createStyles(colors);

  async function handleLogout() {
    try {
      await signOut();
    } catch (error) {
      console.log("Erro ao sair:", error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoEsquerda}
        onPress={() => navigator.goBack()}
      >
        {voltar}
      </TouchableOpacity>

      <Text style={styles.titulo}>{titulo}</Text>

      <TouchableOpacity
        style={styles.botaoDireita}
        onPress={handleLogout}
      >
        <Text style={styles.sair}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}