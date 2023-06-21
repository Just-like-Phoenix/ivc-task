import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./component/LayoutComponent";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import { useThemeChecker } from "./hooks/useThemeChecker";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { backgroundColor } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {    
    background-color: ${backgroundColor};
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={{ mode: useThemeChecker() }}>
      <GlobalStyle />
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
