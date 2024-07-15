import "./App.css";
import { usePetStore } from "./pet-store-api";

function App() {
  const {
    data,
    error, // const error: undefined
  } = usePetStore("/pets", {});
  return <pre>{JSON.stringify({ data, error }, null, 2)}</pre>;
}

export default App;
