import StackRoutes from "./stack.routes";

export default function Routes({ isSignedIn }) {
  return <StackRoutes isSignedIn={isSignedIn} />;
}