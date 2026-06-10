import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import { Feather } from "@expo/vector-icons";

import Header from "../../../assets/components/Header";
import Card from "../../../assets/components/CardListar";
import Lista from "../../../assets/components/ListaReagioes";

import { useTheme } from "../../../context/ThemeContext";
import { createStyles } from "./style";

export default function ListarTodos() {
  const navigator = useNavigation();
  const scrollRef = useRef<ScrollView>(null);

  const { colors, isDark, toggleTheme } = useTheme();
  const styles = createStyles(colors);

  const LIMIT = 30;

  const MIN_OFFSET = 386;
  const MAX_POKEMONS = 493;
  const MAX_OFFSET = MAX_POKEMONS - LIMIT;

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [adicionar, setAdicionar] = useState(MIN_OFFSET);

  function Diminuir() {
    setAdicionar((prev) => Math.max(MIN_OFFSET, prev - LIMIT));

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  function Somar() {
    setAdicionar((prev) => Math.min(MAX_OFFSET, prev + LIMIT));

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  useEffect(() => {
    async function fetchPokemons() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${adicionar}&limit=${LIMIT}`
        );

        const data = await res.json();

        const detailed = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();

            return {
              id: details.id,
              name: details.name,
              image: details.sprites.other.home.front_default,
              types: details.types.map((t: any) => t.type.name),
            };
          })
        );

        setPokemons(detailed);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, [adicionar]);

  return (
    <View style={[styles.containerScreen, { backgroundColor: colors.background }]}>
      <Header
        titulo="Sinnoh"
        voltar={<Feather name="arrow-left" size={30} color={colors.text} />}
      />

      <ScrollView
        ref={scrollRef}
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.Lista}>
          <TouchableOpacity onPress={() => navigator.navigate("Kanto" as never)}>
            <Lista regiao="Kanto" cor="#2E7D32" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Johto" as never)}>
            <Lista regiao="Johto" cor="#A67C00" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Hoenn" as never)}>
            <Lista regiao="Hoenn" cor="#1565C0" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Sinnoh" as never)}>
            <Lista regiao="Sinnoh" cor="#283593" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Unova" as never)}>
            <Lista regiao="Unova" cor="#424242" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Kalos" as never)}>
            <Lista regiao="Kalos" cor="#AD1457" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Alola" as never)}>
            <Lista regiao="Alola" cor="#EF6C00" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Galar" as never)}>
            <Lista regiao="Galar" cor="#B71C1C" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Paldea" as never)}>
            <Lista regiao="Paldea" cor="#6A1B9A" />
          </TouchableOpacity>
        </View>

        <View style={styles.containerCards}>
          {loading && (
            <ActivityIndicator size="large" color={colors.primary} />
          )}

          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              theme="dark"
              id={pokemon.id}
              nome={
                pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.slice(1)
              }
              numero={`#${pokemon.id.toString().padStart(4, "0")}`}
              imagem={{ uri: pokemon.image }}
              tipo1={
                pokemon.types[0]
                  ? pokemon.types[0].charAt(0).toUpperCase() +
                    pokemon.types[0].slice(1)
                  : null
              }
              tipo2={
                pokemon.types[1]
                  ? pokemon.types[1].charAt(0).toUpperCase() +
                    pokemon.types[1].slice(1)
                  : null
              }
            />
          ))}
        </View>

        <View style={styles.Botoes}>
          {adicionar > MIN_OFFSET && (
            <TouchableOpacity
              onPress={Diminuir}
              style={styles.botaoDiminuir}
            >
              <Text style={styles.textoBotao}>
                ⬅ Anterior
              </Text>
            </TouchableOpacity>
          )}

          {adicionar < MAX_OFFSET && (
            <TouchableOpacity
              onPress={Somar}
              style={styles.botaoSomar}
            >
              <Text style={styles.textoBotao}>
                Próximo ➜
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

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