import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "./src/context/ThemeContext";

import Routes from "./src/routes";

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return <Routes isSignedIn={isSignedIn} />;
}

export default function App() {
  return (
    <ThemeProvider>
      <ClerkProvider
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
        tokenCache={tokenCache}
      >
        <NavigationContainer>
          <InitialLayout />
        </NavigationContainer>
      </ClerkProvider>
    </ThemeProvider>
  );
}