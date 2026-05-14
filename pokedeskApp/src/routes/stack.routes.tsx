import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "../pages/cadastro";
import Favorito from "../pages/favoritos";
import Home from "../pages/home";
import ListarTodos from "../pages/listarTodos";
import Login from "../pages/login";
import Pesquisa from "../pages/pesquisar";
import Informacoes from "../pages/informacoes";

import Kanto from "../pages/listarTodos/Kanto";
import Johto from "../pages/listarTodos/Johto";
import Hoenn from "../pages/listarTodos/Hoenn";
import Sinnoh from "../pages/listarTodos/Sinnoh";
import Unova from "../pages/listarTodos/Unova";
import Kalos from "../pages/listarTodos/Kalos";
import Alola from "../pages/listarTodos/Alola";
import Galar from "../pages/listarTodos/Galar";
import Paldea from "../pages/listarTodos/Paldea";

const Stack = createNativeStackNavigator();

export default function StackRoutes({ isSignedIn }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isSignedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen
            name="Favorito"
            component={Favorito}
          />

          <Stack.Screen
            name="ListarTodos"
            component={ListarTodos}
          />

          <Stack.Screen
            name="Pesquisa"
            component={Pesquisa}
          />

          <Stack.Screen
            name="Informacoes"
            component={Informacoes}
          />

          <Stack.Screen name="Kanto" component={Kanto} />
          <Stack.Screen name="Johto" component={Johto} />
          <Stack.Screen name="Hoenn" component={Hoenn} />
          <Stack.Screen name="Sinnoh" component={Sinnoh} />
          <Stack.Screen name="Unova" component={Unova} />
          <Stack.Screen name="Kalos" component={Kalos} />
          <Stack.Screen name="Alola" component={Alola} />
          <Stack.Screen name="Galar" component={Galar} />
          <Stack.Screen name="Paldea" component={Paldea} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
          />
        </>
      )}
    </Stack.Navigator>
  );
}