import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import * as WebBrowser from "expo-web-browser"
import * as Linking from "expo-linking"
import { useOAuth } from "@clerk/clerk-expo";

import Botao from "../../assets/components/Button";

import PokeBola from "../../assets/img/jogo.png";

WebBrowser.maybeCompleteAuthSession()

export default function Cadastro() {
  const navigator = useNavigation();

  const [isLoading, setIsLoading] = useState(false)

  const googleOAuth = useOAuth({ strategy: "oauth_google" })

  async function onGoogleSignIn(){
    try {
      setIsLoading(true)

        const redirectURL = Linking.createURL("/")
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectURL })

      if(oAuthFlow.authSessionResult?.type === "success"){
        if(oAuthFlow.setActive){
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
        }
      } else{
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

useEffect(() => {
  WebBrowser.warmUpAsync();

  return () => {
    WebBrowser.coolDownAsync();
  };
}, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Image source={PokeBola} style={styles.image} />
          <Text style={styles.logo}>Pokedéx</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Criar conta</Text>
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

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                secureTextEntry
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <Botao title="Entrar com Google" onPress={onGoogleSignIn} isLoading={isLoading}/>

          <Text style={styles.switchText}>
            Já tem conta?
            <TouchableOpacity onPress={() => navigator.navigate("Login")}>
              <Text style={styles.link}>Clique Aqui</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
