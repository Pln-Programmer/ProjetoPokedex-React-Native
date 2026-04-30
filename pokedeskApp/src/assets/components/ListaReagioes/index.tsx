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

export default function Regiao({ regiao, cor }) {
  return (
    <>
    <View style={[styles.container, { backgroundColor: cor }]}>
      <Text style={styles.texto}>{regiao}</Text>
    </View>
    </>
  );
}
