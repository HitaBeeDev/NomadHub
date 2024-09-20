import "./index.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      {/* Main Layout with Header, Content and Footer */}
      <Route path="/" element={<Layout />}>
        {/* Index page */}
        <Route index element={<IndexPage />} />

        {/* Login page */}
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
