import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Layout from "./Components/Layout/Layout";
import MySavedPalettes from "./Components/MySavedPalettes";
import NewPalette from "./Components/NewPalette";
import { PrivateRoute } from "./Components/PrivateRoute";
import SavedPalette from "./Components/SavedPalette";
import { AuthProvider } from "./Contexts/Auth";
import Login from "./Routes/Login";

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding: 0;
    background : #0f172a;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/new-palette" element={<NewPalette />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my-palettes" element={<MySavedPalettes />} />
              <Route
                path="/dashboard/:id"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path="/palette/:paletteId"
                element={
                  // <PrivateRoute>
                  <SavedPalette />
                  // </PrivateRoute>
                }
              />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
