import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AddNew from "./Components/AddNew";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Layout from "./Components/Layout/Layout";
import { PrivateRoute } from "./Components/PrivateRoute";
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
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />{" "}
                  </PrivateRoute>
                }
              />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
      <AddNew />
    </>
  );
}

export default App;
