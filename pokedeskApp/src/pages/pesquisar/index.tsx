import {
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import styles from "./style";
import axios from "axios";

import Header from "../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function Pesquisa() {
  const [pokemon, setPokemon] = useState("");
  const [resultado, setResultado] = useState(null);

  async function buscarPokemon() {
    if (!pokemon.trim()) {
      Alert.alert("Atenção", "Digite o nome ou número do Pokémon!");
      return;
    }

    try {
      const resposta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
      );

      setResultado(resposta.data);
    } catch (error) {
      console.log("Erro ao buscar Pokemon: ", error);
      Alert.alert("Erro", "Pokemon não encontrado!");
      setResultado(null);
    }
  }

  const coresTipos = {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };

  function formatarNumero(id) {
    return `#${String(id).padStart(4, "0")}`;
  }

  return (
    <>
      <Header
        titulo="Pokedex"
        voltar={<Feather name="arrow-left" size={30} color="#FFF" />}
      />

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite o Pokémon"
          placeholderTextColor="#94A3B8"
          value={pokemon}
          onChangeText={setPokemon}
        />

        <TouchableOpacity style={styles.botao} onPress={buscarPokemon}>
          <Text style={styles.botaoTexto}>Buscar</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={styles.card}>
            <Image
              source={{
                uri: resultado.sprites.other["official-artwork"].front_default,
              }}
              style={styles.imagem}
            />

            <View style={styles.info}>
              <Text style={styles.numero}>{formatarNumero(resultado.id)}</Text>

              <Text style={styles.nome}>{resultado.name.toUpperCase()}</Text>
              
              <View style={styles.tiposContainer}>
                {resultado.types.map((tipo, index) => (
                  <View
                    key={index}
                    style={[
                      styles.tipo,
                      { backgroundColor: coresTipos[tipo.type.name] },
                    ]}
                  >
                    <Text style={styles.tipoTexto}>
                      {tipo.type.name.toUpperCase()}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        <StatusBar style="light" />
      </View>
    </>
  );
}
