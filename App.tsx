import { NavigationContainer } from "@react-navigation/native"
import { AppRooutes } from "./src/Routes";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";

export default function App() {
  return (

    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRooutes />
      </NavigationContainer>
    </ThemeProvider>

  );
}
