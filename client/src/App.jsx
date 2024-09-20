import "./index.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import Content from "./Pages/Content";

function App() {
  return (
    <Routes>
      {/* Main Layout with Header, Content and Footer */}
      <Route path="/" element={<Layout />}>
        {/* Index page */}
        <Route index element={<IndexPage />} />

        {/* Content */}
        <Route index element={<Content />} />

        {/* Login page */}
        <Route path="login" element={<LoginPage />} />

        {/* Register page */}
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
