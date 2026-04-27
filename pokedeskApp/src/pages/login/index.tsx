import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import { useNavigation } from '@react-navigation/native'

import PokeBola from "../../assets/img/jogo.png";

export default function Login() {

    const navigator = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.header}>
          <Image source={PokeBola} style={styles.image} />
          <Text style={styles.logo}>Pokedéx</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Preencha os dados abaixo</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry
                placeholderTextColor="#999"
              />
            </View>

          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>

          <Text style={styles.switchText}>
            Não tem conta? 
            <TouchableOpacity onPress={() => navigator.navigate("Cadastro")}>
                <Text style={styles.link}> Clique Aqui</Text>
            </TouchableOpacity>
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}