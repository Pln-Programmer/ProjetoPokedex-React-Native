import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";

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
    <ClerkProvider
      publishableKey={
        process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
      }
    >
      <NavigationContainer>
        <InitialLayout />
      </NavigationContainer>
    </ClerkProvider>
  );
}