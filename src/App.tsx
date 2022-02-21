import { ColorScheme, ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import "./App.css";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import LightAndDarkModeButton from "./Components/LightDarkButton";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  
  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
        <Paper padding="md" radius={0} style={{minHeight: "100vh"}}>
        <LightAndDarkModeButton />
        <Cards />
        <Buttons/>
        </Paper>
      </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
