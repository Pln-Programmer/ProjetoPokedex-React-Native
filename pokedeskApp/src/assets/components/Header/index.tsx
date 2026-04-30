import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Header({ titulo, voltar }) {

      const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.lado} onPress={() => navigator.navigate("Home" as never)}>{voltar}</TouchableOpacity>

      <View style={styles.centro}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>

      <View style={styles.lado} />
    </View>
  );
}
