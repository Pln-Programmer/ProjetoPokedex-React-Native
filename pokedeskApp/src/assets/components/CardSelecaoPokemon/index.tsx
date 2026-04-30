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
import { Ionicons } from "@expo/vector-icons";

export default function CardSelecaoPokemon({ imagem, titulo, cor }) {
  return (
    <>
    <View style={[styles.container, { backgroundColor: cor }]}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
    </>
  );
}
