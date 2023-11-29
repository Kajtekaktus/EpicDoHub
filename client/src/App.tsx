import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
    <header></header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
