import { FantasyProvider } from "./FantasyProvider";
import { Routes } from "./routes/routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <FantasyProvider>
      <GlobalStyle/>
      <Routes/>
    </FantasyProvider>
  );
}

export default App;
