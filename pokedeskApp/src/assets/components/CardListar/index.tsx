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

import pokemon from "../../img/bulbasaur.png"

export default function CardListar() {
  return (
    <TouchableOpacity style={styles.card}>
      
      <View style={styles.imageContainer}>
        <Image source={pokemon} style={styles.image} />
      </View>

      <View style={styles.info}>
        <Text style={styles.number}>Nº 0001</Text>
        <Text style={styles.name}>Bulbasaur</Text>

        <View style={styles.types}>
          <View style={[styles.badge, styles.grass]}>
            <Text style={styles.badgeText}>Planta</Text>
          </View>

          <View style={[styles.badge, styles.poison]}>
            <Text style={styles.badgeText}>Poison</Text>
          </View>
        </View>
      </View>

    </TouchableOpacity>
  );
}