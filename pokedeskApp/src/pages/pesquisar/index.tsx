import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import { createStyles } from "./style";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import Header from "../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function Pesquisa() {
  const navigator = useNavigation();

  const { colors, isDark, toggleTheme } = useTheme();

  const styles = createStyles(colors);

  const [pokemon, setPokemon] = useState("");
  const [todosPokemons, setTodosPokemons] = useState<any[]>([]);
  const [resultados, setResultados] = useState<any[]>([]);

  useEffect(() => {
    async function carregarPokemons() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1302"
        );

        setTodosPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    carregarPokemons();
  }, []);

  async function pesquisar(texto: string) {
    setPokemon(texto);

    if (texto.trim() === "") {
      setResultados([]);
      return;
    }

    try {
      const filtrados = todosPokemons
        .filter((poke) =>
          poke.name.toLowerCase().includes(texto.toLowerCase())
        )
        .slice(0, 10);

      const detalhes = await Promise.all(
        filtrados.map(async (poke) => {
          const response = await axios.get(poke.url);
          return response.data;
        })
      );

      setResultados(detalhes);
    } catch (error) {
      console.log(error);
    }
  }

  const coresTipos: Record<string, string> = {
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

  function formatarNumero(id: number) {
    return `#${String(id).padStart(4, "0")}`;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
  titulo="Pokedex"
  voltar={
    <Feather
      name="arrow-left"
      size={30}
      color={colors.text}
    />
  }
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
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigator.navigate(
                "Informacoes" as never,
                {
                  pokemonId: resultado.id,
                } as never
              )
            }
          >
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
                      {
                        backgroundColor: coresTipos[tipo.type.name],
                      },
                    ]}
                  >
                    <Text style={styles.tipoTexto}>
                      {tipo.type.name.toUpperCase()}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        )}

        <StatusBar style="light" />
      </View>

      <TouchableOpacity
        style={[
          styles.trocaTemaButton,
          {
            backgroundColor: isDark ? "#FFFFFF" : "#000000",
          },
        ]}
        onPress={toggleTheme}
      >
        <Feather
          name={isDark ? "sun" : "moon"}
          size={24}
          color={isDark ? "#000000" : "#FFFFFF"}
        />
      </TouchableOpacity>
    </View>
  );
}