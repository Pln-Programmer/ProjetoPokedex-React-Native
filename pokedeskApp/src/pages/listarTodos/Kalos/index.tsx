import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";

import Header from "../../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import Card from "../../../assets/components/CardListar";
import Lista from "../../../assets/components/ListaReagioes";

export default function ListarTodos() {
  const navigator = useNavigation();
  const scrollRef = useRef<ScrollView>(null);

  const LIMIT = 30;

  const MIN_OFFSET = 0;
  const MAX_POKEMONS = 1010;
  const MAX_OFFSET = MAX_POKEMONS - LIMIT;

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [adicionar, setAdicionar] = useState(MIN_OFFSET);

  function Diminuir() {
    setAdicionar((prev) => Math.max(prev - LIMIT, MIN_OFFSET));
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }

  function Somar() {
    setAdicionar((prev) => Math.min(prev + LIMIT, MAX_OFFSET));
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${adicionar}&limit=${LIMIT}`
      );

      const data = await res.json();

      const detailed = await Promise.all(
        data.results.map(async (p: any) => {
          const r = await fetch(p.url);
          const d = await r.json();

          return {
            id: d.id,
            name: d.name,
            image: d.sprites.other.home.front_default,
            types: d.types.map((t: any) => t.type.name),
          };
        })
      );

      setPokemons(detailed);
      setLoading(false);
    }

    fetchPokemons();
  }, [adicionar]);

  return (
    <>
      <View style={styles.header}>
        <Header
          titulo="Pokédex"
          voltar={<Feather name="arrow-left" size={30} color="#FFF" />}
        />
      </View>

      <ScrollView
        ref={scrollRef}
        style={{ backgroundColor: "#0B1020" }}
        contentContainerStyle={{ paddingBottom: 30 }}
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

        <View style={styles.container}>
          {loading && <ActivityIndicator size="large" color="#00BFFF" />}

          {pokemons.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              nome={p.name}
              numero={`#${String(p.id).padStart(4, "0")}`}
              imagem={{ uri: p.image }}
              tipo1={p.types[0]}
              tipo2={p.types[1]}
            />
          ))}
        </View>

        <View style={styles.Botoes}>
          <TouchableOpacity onPress={Diminuir} style={styles.botaoDiminuir}>
            <Text style={styles.textoBotao}>Anterior</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={Somar} style={styles.botaoSomar}>
            <Text style={styles.textoBotao}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}